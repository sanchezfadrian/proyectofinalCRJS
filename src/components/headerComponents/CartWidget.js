import { useContext } from "react";
import cartEmpty from "../../img/cart-empty.svg"
import { CartContext } from "../context/CartContext";

const CartWidget = () =>{

    const { totalCartItem } = useContext(CartContext)

    return(
        <div>
            <button className="button is-outlined">
                <img width="18" src={cartEmpty}></img>{totalCartItem}
            </button>
        </div>
    )
}

export default CartWidget;