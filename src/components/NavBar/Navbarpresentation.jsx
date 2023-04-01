import "./Navbar.module.css";
import { Button } from "react-bootstrap";

function Navbarpresentation({ links }) {
  return (
   
      <div className="navbarn-navb">
        {links.map((link) => (
          <Button
            key={link.title}
            href={link.url}
            variant="secondary"
            className="ml-auto"
          >
            {link.title}
          </Button>
        ))}
      </div>
   
  );
}

export default Navbarpresentation;
