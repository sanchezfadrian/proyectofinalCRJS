import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";

function CartItem(props) {

const { removeItem } = useContext(CartContext)

  return (
    <div>
        <div className="columns is-vcentered has-background-light mb-4">
            <div className="column is-3 has-text-centered">
                <img className="image is-96x96 is-inline-block" src={props.image}/>
            </div>
            <div className="column is-4 has-text-centered">
                <p className="has-text-weight-bold">{props.title}</p>
            </div>
            <div className="column is-2 has-text-centered">
                <p>{props.quantity}</p>
            </div>
            <div className="column is-2 has-text-centered">
                <p>$ {props.price}</p>
            </div>
            <div className="column is-1 has-text-centered">
            <Link to='/cart'>
                <button className="button is-danger" onClick={()=> removeItem(props.id)}>X</button>
            </Link>
            </div>
        </div>
    </div>
  );
}

export default CartItem;