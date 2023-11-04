import ItemList from "../components/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {db} from "../components/config/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"; 

const ItemListContainer = (greeting) => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { idCategory } = useParams()

    useEffect(() => {
        setLoading(true)
        const collectionRef = idCategory
        ? query(collection(db,'items'), where('category','==',idCategory))
        : collection(db, 'items')

        getDocs(collectionRef)
        .then(response => {
            const itemsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
            setItems(itemsAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        })
      },[idCategory]);

  return (
    <div className="container mt-5">
        <h1 className="title">{greeting.props}</h1>
        {loading ? (
                <p>Cargando...</p>
            ) : 
        <ItemList props={items} />}
    </div>
  );
};

export default ItemListContainer;