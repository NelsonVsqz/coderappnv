import { Link } from 'react-router-dom';
import ItemCountcontainer from './../ItemCount/ItemCountcontainer';
import  styles from './ItemDetail.module.css';

const ItemDetail = ({product,onAdd,cantidadTotal}) => {


return (
    <>
    <header className={styles.Header}>
    <h2 className={styles.ItemHeader}>
    {product.name}
    </h2>
    </header>
  <article className={styles.CardItem}>
        <picture>
            <img src={product.img} alt={product.name} className={styles.ItemImg} />
        </picture>
        <section className={styles.MarcInfo}>
        <p className={styles.Info}>
         Categoria: {product.category}
        </p>
        <p className={styles.Info}>
         Descripcion: {product.description}
        </p>                    
        <p className={styles.Info}>
         Precio: ${product.price}
        </p>    
        <p className={styles.Info}>
         Stock disponible: {product.stock}
        </p>
        </section>
        <footer className={styles.ItemFooter}>
        {
            cantidadTotal > 0 ? (
                     <Link to="/cart" className={styles.Option}>Terminar compra</Link>
                ) :(
         <ItemCountcontainer  initial={cantidadTotal} onAdd={onAdd} stock={product.stock} className={styles.ItemCountContainer}/>
        )
        }
        </footer>
        
        </article>
        </>
        )
  }
  
  export default ItemDetail;