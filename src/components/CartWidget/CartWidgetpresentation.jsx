import cart from "./assets/carro.png";
import styles from './CartWidget.module.css';

const CartWidgetpresentation = ({contador}) => {

return (
<div className={styles.containerCart}>
<img className={styles.cart} src={cart} alt="cart-widget"/>
{contador}
</div>
)
} 
export default CartWidgetpresentation