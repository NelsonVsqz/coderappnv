
import { useContext, useState } from 'react';
import ItemCountpresentation from './../ItemCount/ItemCountpresentation';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const ItemDetail = ({id,name,img,category,descripcion,price,stock}) => {

const [quantityAdded,setQuantityAdded]= useState(0)

const { addItem } = useContext(CartContext)

const handleOnAdd = (quantity) =>{
setQuantityAdded(quantity)

const item = {
    id,name,price
}

addItem(item,quantity)

}

return (
        <article className="CardItem">
        <header className="Header">
        <h2 className="ItemHeader">
        {name}
        </h2>
        </header>
        <picture>
            <img src={img} alt={name} className="ItemImg" />
        </picture>
        <section>
        <p className="Info">
         Categoria: ${category}
        </p>
        <p className="Info">
         Descripcion: ${descripcion}
        </p>                    
        <p className="Info">
         Precio: ${price}
        </p>    
        <p className="Info">
         Stock disponible: {stock}
        </p>
        </section>
        <footer className="ItemFooter">
        {
            quantityAdded > 0 ? (
                     <Link to="/cart" className='Option'>Terminar compra</Link>
                ) :(
         <ItemCountpresentation  initial={1} onAdd={handleOnAdd} stock={stock}/>
        )
        }
        </footer>
        
        </article>
        )
  }
  
  export default ItemDetail;