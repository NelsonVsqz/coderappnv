import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbarpresentation({ links }) {
  return (
   
      <div className={styles.Navbar}>
        <Link to="/" className={styles.NavbarBrand}>
          Contrumundo
        </Link>
        <div className={styles.Categories}>
       <Link to={"/"} className={styles.CategoryLink}>Todos</Link>
       <Link to={"/category/"+links.Corralon} className={styles.CategoryLink}>Corralon</Link>
<Link to={"/category/"+links.Ferreteria} className={styles.CategoryLink}>Ferreteria</Link>
<Link to={"/category/"+links.Plomeria} className={styles.CategoryLink}>Plomeria</Link>
      </div>
</div>   

)
};
export default Navbarpresentation
