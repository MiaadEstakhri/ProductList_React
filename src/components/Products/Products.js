import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";

const Product = ({
  onChange,
  onDecrement,
  onDelete,
  onIncrement,
  click,
  product,
}) => {
  return (
    <div className={styles.product} onClick={click}>
      <p className={styles.name}>product name : {product.title} course</p>
      <p className={styles.price}>product price : {product.price} $</p>
      <div className={styles.wrapperBtn}>
        <span className={styles.value}>{product.quantity}</span>
        <button
          className={`${styles.button} ${
            product.quantity === 1 && styles.remove
          }`}
          onClick={onDecrement}
        >
          {product.quantity > 1 ? "-" : <BiTrash />}
        </button>
        <button
          className={`${styles.button} ${styles.inc}`}
          onClick={onIncrement}
        >
          +
        </button>
        <button className={styles.button} onClick={onDelete}>
          delete
        </button>
      </div>
    </div>
  );
};

export default Product;
