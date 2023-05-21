import ItemCountpresentation from "./ItemCountpresentation";
import { useEffect, useState } from "react";

const ItemCountcontainer = ({ stock,initial=1,onAdd }) => {
  const [quantity , setQuantity] = useState(initial)

  useEffect(()=>{
    setQuantity(initial)
  }, [initial])

    const increment = () => {
    if(quantity < stock) { 
        setQuantity(quantity+1)
    } else {
        alert("Maximo")
    }

}
    const decrement = () => {
        if(quantity > 1) { 
            setQuantity(quantity-1)
        }
    }
  return (

<ItemCountpresentation decrement={decrement} quantity={quantity} increment={increment} onAdd={onAdd}/>

  );
}

export default ItemCountcontainer;