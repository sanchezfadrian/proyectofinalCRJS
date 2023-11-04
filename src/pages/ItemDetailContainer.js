import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import {db} from "../components/config/firebase"
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () =>{

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    const { idItem } = useParams();

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db,'items', idItem)

        getDoc(docRef)
        .then(response => {
                const data = response.data()
                const itemAdapted = { id: response.id, ...data }
                setItem(itemAdapted)
            })
        .catch(error => {
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        })
      },[idItem])
    
    return(
        <div className="container mt-5">
            {loading ? (
                <p>Cargando...</p>
            ) : 
            <ItemDetail
                id={item.id}
                category={item.category}
                image={item.image}
                title={item.title}
                price={item.price}
                description={item.description}
                stock={item.stock}
            />}
        </div>
    );
}

export default ItemDetailContainer;