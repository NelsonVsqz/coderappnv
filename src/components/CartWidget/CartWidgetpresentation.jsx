import { Link } from "react-router-dom";
import cart from "./assets/carro.png";
import styles from "./CartWidget.module.css";

const CartWidgetpresentation = ({ totalQuantity }) => {
  return (
    
    <Link
      to="/cart"
      className={styles.ContainerCar}
      style={{ display: totalQuantity > 0 ? "block" : "none" }}
    >
      <img className={styles.cart} src={cart} alt="cart-widget" />
      {totalQuantity}
    </Link>
    
  );
};
export default CartWidgetpresentation;
