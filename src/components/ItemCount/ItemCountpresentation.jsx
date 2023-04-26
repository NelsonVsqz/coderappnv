import "./ItemCount.module.css";
import styles from "./ItemCount.module.css";

const ItemCountpresentation = ({
  decrement,
  quantity,
  increment,
  onAdd,
  stock,
}) => {
  return (
    <div className={styles.Counter}>
      <div className="Controls">
        <button className="Button" onClick={decrement}>
          -
        </button>
        <h4 className="Numbre">{quantity}</h4>
        <button className="Button" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          className="Button"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carr
        </button>
      </div>
    </div>
  );
};

export default ItemCountpresentation;
