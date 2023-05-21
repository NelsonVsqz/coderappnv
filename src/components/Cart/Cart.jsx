import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import Item from "../Item/Item"
import styles from "./Cart.module.css"

const Cart = ()=>{
 const {cart,clearCart,getTotalPrice,getTotalQuantity} = useContext(CartContext)

 
  return (
    <div className={styles.Container}>
    {getTotalQuantity()===0 ?(
<div className={styles.NoItems}>
  <h1>No hay items en el carrito</h1>
  <Link to="/" className={styles.Option}>Productos</Link>
  </div> 
  ) : (
<div className={styles.TotalContainer}>
    { cart.map(p => <Item key={p.id} {...p} />)}
    <h3 className={styles.Total}>Total: ${getTotalPrice()}</h3>
    <h3 className={styles.Quantity}>Cantidad: {getTotalQuantity()}</h3>
    <Link to="/checkout" className={styles.Option}>Checkout</Link>    
    <button onClick={() => clearCart() } className={styles.Button} >Vaciar carrito</button>
</div>
)}
</div>
)
}

export default Cart