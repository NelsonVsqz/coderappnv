import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from './../ItemDetail/ItemDetail';
import { db } from "../../services/firebase/firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import { CartContext } from "../../context/cartContext";


const ItemDetailContainer = () => {

    const [product,setProduct] = useState({})

    const { addItem, getQuantityById } = useContext(CartContext);

    const {itemId} = useParams()

    useEffect(() => {

      const itemCollection = collection(db, "products");
      const docRef = doc(itemCollection, itemId);
      getDoc(docRef)
        .then((res) =>{
        const data = res.data()
        const productAdapted = {
          ...data,
          id: res.id,
        }
          setProduct(productAdapted)
      })
    .catch(error => {
console.error(error)
    })
},[itemId])


const onAdd = (cantidad) => {
  let data = {
    ...product,
    quantity: cantidad,
  };

  addItem(data,cantidad);

};

let cantidadTotal = getQuantityById(itemId);


    return (
      <div className="ItemDetailContainer" >
        <ItemDetail product={product} onAdd={onAdd} cantidadTotal={cantidadTotal} />
      </div>
    );
  }
  
  export default ItemDetailContainer;