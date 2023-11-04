import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const ItemDetail = ( {id, category,image,title,price,description,stock} ) =>{

    const[quantityAdded,setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)

        const item = {
            id, title, price,image
        }

        addItem(item,quantity)
    }

    return(
    <div className="container">
        <div className="tile is-ancestor">
            <div className="tile is-vertical is-12">
                <div className="tile is-parent">
                    <article className="tile is-child box is-uppercase">
                        {category}
                    </article>
                </div>
                <div className="tile">
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <figure className="image is-4by3">
                                <img src={image} alt="Placeholder image"></img>
                            </figure>
                        </article>
                    </div>
                    <div className="tile is-parent is-vertical">
                        <article className="tile is-child box">
                            <div className="columns">
                                <div className="column has-text-centered">  
                                    <p className="is-size-4">{title}</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column has-text-centered mt-5">
                                    <p className="is-size-2 button is-outlined">$ {price} c/u</p>
                                </div>
                            </div>
                        </article>
                        <article className="tile is-child box">
                            {
                                quantityAdded > 0 ? (
                                    <Link to='/cart'>
                                        <button className="button is-success is-large is-fullwidth">Terminar compra</button>
                                    </Link>
                                ):
                                (
                                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                                )
                            }
                        </article>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        {description}
                    </article>
                </div>
            </div>
        </div>
    </div>
    )

}

export default ItemDetail;