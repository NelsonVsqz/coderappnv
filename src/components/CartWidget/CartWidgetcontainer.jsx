import { useContext } from "react"
import CartWidgetpresentation from "./CartWidgetpresentation"
import { CartContext } from "../../context/cartContext"


const CartWidgetcontainer = () => {

const {getTotalQuantity} = useContext(CartContext)
let totalQuantity = getTotalQuantity()
    return (
    
  <CartWidgetpresentation totalQuantity={totalQuantity} />
    
    )
    } 
    export default CartWidgetcontainer