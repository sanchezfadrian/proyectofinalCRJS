import { useContext } from "react"
import { CartContext } from "../components/context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../components/CartItem"

const Cart = () =>{
    const {cart, clearCart,totalQuantity,totalPrice,totalCartItem} = useContext(CartContext)

    if(totalCartItem === 0){
        return(
            <div>
                <div className="container mt-5">
                    <div className="column has-text-centered">
                        <h1>No hay items en el carrito</h1>
                        <Link to='/'>
                            <button className="button is-dark">Volver a todos</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="container mt-5">
            <div className="container">
                <div className="columns is-vcentered has-background-success has-text-white mb-5">
                    <div className="column is-3 has-text-centered">
                        Imagen
                    </div>
                    <div className="column is-4 has-text-centered">
                        Titulo
                    </div>
                    <div className="column is-2 has-text-centered">
                        Cantidad
                    </div>
                    <div className="column is-2 has-text-centered">
                        Precio
                    </div>
                    <div className="column is-1 has-text-centered">
                        Eliminar
                    </div>
                </div>
                {cart.map(p=> <CartItem key={p.id}{...p}/>)}
            </div>
            <div className="columns is-vcentered mb-5">
                <div className="column is-3 has-text-centered">
                    <Link to='/checkout'>
                        <button className="button is-success has-text-weight-bold">Finalizar compra</button>
                    </Link>
                </div>
                <div className="column is-4 has-text-centered">
                    <Link to='/'>
                        <button className="button is-info has-text-weight-bold">Seguir comprando</button>
                    </Link>
                </div>
                <div className="column is-2 has-text-centered has-text-weight-bold">
                    {totalQuantity}
                </div>
                <div className="column is-2 has-text-centered has-text-weight-bold">
                    $ {totalPrice}
                </div>
                <div className="column is-1 has-text-centered">
                    <button className="button is-danger has-text-weight-bold" onClick={()=> clearCart()}>Limpiar</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;