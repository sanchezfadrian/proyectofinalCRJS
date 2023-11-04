import { useContext, useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import { CartContext } from "../components/context/CartContext";
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import {db} from "../components/config/firebase"
import { Link } from "react-router-dom";

export const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart,totalPrice,clearCart} = useContext(CartContext)

    const createOrder = async ({ name, phone, email}) => {
        setLoading(true)

        try{
            const objOrder = {
                buyer : {
                    name, phone, email
                },
                items: cart,
                totalPrice: totalPrice,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db);

            const outOfStock = [];

            const ids = cart.map(item => item.id);

            const itemsRef = collection(db, 'items');

            const productAddedFromFirestore = await getDocs(query(itemsRef, where(documentId(),'in',ids)));

            const {docs} = productAddedFromFirestore;

            docs.forEach(doc =>{
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock

                const itemAddedToCart = cart.find(item => item.id === doc.id)
                const itemQuantity = itemAddedToCart?.quantity

                if(stockDb >= itemQuantity){
                    batch.update(doc.ref,{stock: stockDb - itemQuantity})
                }else{
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })
            if (outOfStock.length === 0){
                await batch.commit()

                const orderRef = collection(db,'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            }else{
                console.error("Hay productos sin stock")
            }
        } catch(error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    if (loading){
        return(
            <div className="container mt-5">
                <h1>Aguarde, validando y generando orden</h1>
            </div>
        ) 
    }

    if (orderId){
        return(
            <div className="container mt-5">
                    <div>
                        El ID de su orden es: {orderId} 
                    </div>
                <Link to='/'>
                        <button className="button is-success has-text-weight-bold mt-5">Volver a todos</button>
                </Link>
            </div>
        ) 
    }

    return (
        <div className="container mt-5">
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout;