import axios from "axios";
import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{

    const [item, setItem] = useState([]);
    const [error, setError] = useState(null);

    const params = useParams();

    useEffect(() => {
        axios
        .get(`https://fakestoreapi.com/products/${params.idItem}`)
        .then((response)=> setItem(response.data))
        .catch((error)=> setError(error))
    },[]);
    
    return(
        <div>
            <ItemDetail props={item} />
        </div>
    );
}

export default ItemDetailContainer;