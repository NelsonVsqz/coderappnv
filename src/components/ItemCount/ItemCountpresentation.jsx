import "./ItemCount.module.css";
import styles from "./ItemCount.module.css";

const ItemCountpresentation = ({
  decrement,
  quantity,
  increment,
  onAdd
}) => {
  return (
    <div className={styles.Counter}>
      <div className={styles.Controls}>
        <button className={styles.Button} onClick={decrement}>
          -
        </button>
        <h4 className={styles.Number}>{quantity}</h4>
        <button className={styles.Button} onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          className={styles.AddButton}
          onClick={() => onAdd(quantity)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCountpresentation;
