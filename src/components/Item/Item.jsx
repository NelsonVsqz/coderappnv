import { Link } from "react-router-dom"
import styles from './Item.module.css';
import { useContext } from 'react';
import { CartContext } from './../../context/cartContext';
import { useLocation } from 'react-router-dom';

const Item = ({id,name,img,price,stock}) => {

const {getQuantityById,getPriceById,removeItem} = useContext(CartContext)

const location = useLocation();
const hideElementscat = location.pathname.includes('/category');
const hideElements = location.pathname === '/';

return (
<article className={styles.CardItem}>

<div className={styles.ItemImgContainer}>
    <img src={img} alt={name} className={styles.ItemImg} />
  </div>
  <div className={styles.ItemDetails}>
<header className={styles.Header}>
<h2 className={styles.ItemHeader}>
{name}
</h2>
</header>
<section>
<p className={styles.Info}>
 Precio: ${price}
</p>    
<p className={styles.Info}>
 Stock disponible: {stock}
</p>
{!hideElementscat &&
!hideElements && 
getQuantityById(id)>0 &&
<p className={styles.Info}>
 Cantidad: {getQuantityById(id)}
 </p>
}
{!hideElementscat &&
!hideElements &&
getPriceById(id)>0 &&
<>
<p className={styles.Info}>
 Subtotal: {getPriceById(id)}
</p>
<button className={styles.Button} onClick={() => removeItem(id)} >Eliminar Art.</button>
</>
}

</section>
<footer className={styles.ItemFooter}>
<Link to={`/item/${id}`} className={styles.Option} >Ver detalle</Link>
</footer>
</div>
</article>
)
} 
export default Item