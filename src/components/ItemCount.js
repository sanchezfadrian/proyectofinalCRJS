import { useState } from "react";


const ItemCount = ()=>{

    const [quantity, setQuantity] = useState(1)

    function increment (){
            setQuantity(quantity+1)
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
            <div className="column">
                <button className="button is-success is-large is-fullwidth " onClick={decrement}>-</button>
            </div>
            <div className="column">
                <button className="button is-success is-large is-fullwidth" onClick={increment}>+</button>
            </div>
            <div className="column">
                <button className="button is-success is-large is-fullwidth">Agregar al carrito</button>
            </div>
        </div>
    </div>
    )

}

export default ItemCount;