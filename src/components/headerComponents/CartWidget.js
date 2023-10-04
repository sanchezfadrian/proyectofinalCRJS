import cartEmpty from "../../img/cart-empty.svg"

const CartWidget = () =>{

    return(
        <div>
            <button className="button is-outlined">
                <img width="18" src={cartEmpty}></img>0
            </button>
        </div>
    )
}

export default CartWidget;