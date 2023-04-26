import { Link } from "react-router-dom";
import "./Navbar.module.css";

function Navbarpresentation({ links }) {
  return (
   
      <div className="navbarn-navb">
        <Link to="/">
          Ecommerce
        </Link>
        <div className="Categories">
        <Link to={"/category/corralon"}>Corralon</Link>
<Link to={"/category/ferreteria"}>Ferreteria</Link>
<Link to={"/category/plomeria"}>Plomeria</Link>
      </div>
</div>   

)
};
export default Navbarpresentation
