import { useState } from "react";

const ItemCount = ({stock,initial,onAdd})=>{

    const [quantity, setQuantity] = useState(initial)

    function increment (){
        if (quantity < stock){
            setQuantity(quantity+1)
        }
    }

    function decrement (){
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }

    return (
    <div>
        <div className="columns">
            <div className="column">
                <h4 className="button is-success is-outlined is-large is-fullwidth">{quantity}</h4>
            </div>
        </div>
        <div className="columns">
            <div className="column is-2">
                <button className="button is-success is-large is-fullwidth " onClick={decrement}>-</button>
            </div>
            <div className="column is-2">
                <button className="button is-success is-large is-fullwidth" onClick={increment}>+</button>
            </div>
            <div className="column is-8">
                <button className="button is-success is-large is-fullwidth" onClick={()=>onAdd(quantity)} disabled={!stock} >Agregar al carrito</button>
            </div>
        </div>
    </div>
    )

}

export default ItemCount;