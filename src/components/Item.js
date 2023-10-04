import "../app.css";
import { Link } from "react-router-dom";

const Item = ( {props} ) =>{
    
    return(
        <div className="column is-3">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={props.image} alt="Placeholder image"></img>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content card-content-height">
                        <p className="is-size-8">{props.title}</p>
                    </div>
                </div>
                <footer className="card-footer">
                    <p className="card-footer-item is-size-4">$ {props.price}</p>
                    <Link to={`/item/${props.id}`} className="card-footer-item">Ver mas</Link>
                </footer>
            </div>
        </div>
    );
}

export default Item;