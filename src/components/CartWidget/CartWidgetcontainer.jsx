import { useContext } from "react"
import CartWidgetpresentation from "./CartWidgetpresentation"
import { CartContext } from "../../context/cartContext"


const CartWidgetcontainer = () => {
//let contador = 0
const {totalQuantity} = useContext(CartContext)
    return (
    
  <CartWidgetpresentation totalQuantity={totalQuantity} />
    
    )
    } 
    export default CartWidgetcontainer