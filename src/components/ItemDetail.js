import ItemCount from "./ItemCount";

const ItemDetail = ( {props} ) =>{

    console.log(props)

    return(
    <div className="container">
        <div className="tile is-ancestor">
            <div className="tile is-vertical is-12">
                <div className="tile is-parent">
                    <article className="tile is-child box is-uppercase">
                        {props.category}
                    </article>
                </div>
                <div className="tile">
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <figure className="image is-4by3">
                                <img src={props.image} alt="Placeholder image"></img>
                            </figure>
                        </article>
                    </div>
                    <div className="tile is-parent is-vertical">
                        <article className="tile is-child box">
                            <div className="columns">
                                <div className="column has-text-centered">  
                                    <p className="is-size-4">{props.title}</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column has-text-centered mt-5">
                                    <p className="is-size-2 button is-outlined">$ {props.price} c/u</p>
                                </div>
                            </div>
                        </article>
                        <article className="tile is-child box">
                            <ItemCount/>
                        </article>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        {props.description}
                    </article>
                </div>
            </div>
        </div>
    </div>
    )

}

export default ItemDetail;