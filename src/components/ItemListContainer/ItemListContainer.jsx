import { useEffect, useState } from "react";
import { getProductByCategory, getProducts } from "../../asynMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import ItemCountcontainer from "../ItemCount/ItemCountcontainer";


const ItemListContainer = () => {

    const [products,setProducts] = useState([])

    const {categoryId} =useParams()

    useEffect(() => {
      const asyncFunc = categoryId ? getProductByCategory : getProducts	
         asyncFunc(categoryId)
             .then(response =>{
       setProducts(response)
    })
    .catch(error => {
console.error(error)
    })
},[categoryId])

    return (
      <div>
        
        <ItemList products={products} />
        <ItemCountcontainer
            initial={1}
            stock={10}
            onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
          />

      </div>
    );
  }
  
  export default ItemListContainer;