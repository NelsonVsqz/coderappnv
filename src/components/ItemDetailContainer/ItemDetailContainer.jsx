import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from './../ItemDetail/ItemDetail';
import { db } from "../../services/firebase/firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";


const ItemDetailContainer = () => {

    const [product,setProduct] = useState(null)

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

    return (
      <div className="ItemDetailContainer" >
        <ItemDetail {...product} />
      </div>
    );
  }
  
  export default ItemDetailContainer;