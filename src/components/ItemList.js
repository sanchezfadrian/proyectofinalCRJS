import Item from "./Item";

const ItemList = ({ props }) => {
  
    return (
    <div className="columns is-multiline">
        {props.map((item) => <Item props={item} key={item.id} />)}
    </div>
    );
  }
  
  export default ItemList;