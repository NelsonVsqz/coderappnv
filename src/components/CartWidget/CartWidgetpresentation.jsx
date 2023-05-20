import { Link } from "react-router-dom";
import cart from "./assets/carro.png";
import styles from './CartWidget.module.css';

const CartWidgetpresentation = ({totalQuantity}) => {

return (
//<div className={styles.containerCart}>
<Link to="/cart" className="CartWidget" style={{display: totalQuantity > 0 ? "block":"none"}} >
<img className={styles.cart} src={cart} alt="cart-widget"/>
{totalQuantity}
</Link>
//</div>
)
} 
export default CartWidgetpresentation