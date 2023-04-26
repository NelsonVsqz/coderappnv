
import ItemCountpresentation from './../ItemCount/ItemCountpresentation';


const ItemDetail = ({id,name,img,category,descripcion,price,stock}) => {

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
        <ItemCountpresentation  initial={1} onAdd={(quantity) => console.log("cant. agregada",quantity) } stock={stock}   />
        </footer>
        
        </article>
        )
  }
  
  export default ItemDetail;