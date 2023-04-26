import ItemCountpresentation from "./ItemCountpresentation";
import { useState } from "react";

const ItemCountcontainer = ({ stock,initial,onAdd }) => {
  const [quantity , setQuantity] = useState(initial)
    const increment = () => {
    if(quantity < stock) { 
        setQuantity(quantity+1)
    }
}
    const decrement = () => {
        if(quantity > 1) { 
            setQuantity(quantity-1)
        }
    }
  return (

      <ItemCountpresentation decrement={decrement} quantity={quantity} increment={increment} onAdd={onAdd} stock={stock}/>

  );
}

export default ItemCountcontainer;