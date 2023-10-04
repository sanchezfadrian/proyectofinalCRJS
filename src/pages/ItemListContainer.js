import axios from "axios";
import ItemList from "../components/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = (greeting) => {

    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    const params = useParams();

    useEffect(() => {
        if (params.idCategory === undefined) {
          axios
            .get(`https://fakestoreapi.com/products/`)
            .then((response) => setItems(response.data))
            .catch((error) => setError(error));
        } else {
          axios
            .get(`https://fakestoreapi.com/products/category/${params.idCategory}`)
            .then((response) => setItems(response.data))
            .catch((error) => setError(error));
        }
      }, [params]);

  return (
    <div className="container mt-5">
        <h1 className="title">{greeting.props}</h1>
        <ItemList props={items} />
    </div>
  );
};

export default ItemListContainer;