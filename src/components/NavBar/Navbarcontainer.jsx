import Navbarpresentation from "./Navbarpresentation";
import Headercontainer from "./../Header/Headercontainer";
import CartWidgetcontainer from "../CartWidget/CartWidgetcontainer";
import { Box, Grid } from "@mui/material";
import logo from "../CartWidget/assets/construc.jpg";
import styles from "./Navbar.module.css";

function Navbarcontainer() {
  const links = [
    { title: "Corralon", url: "#" },
    { title: "Ferreteria", url: "#" },
    { title: "Plomeria", url: "#" },
  ];

  return (
    <Box>
    <Grid container>
      <Grid item xs={1}>
      <img className={styles.logo} src={logo} alt="logo-widget"/>
      </Grid>
      <Grid item xs={10}>
      <Headercontainer />
      </Grid>
      <Grid item xs={1}>
      <CartWidgetcontainer />
      </Grid>
      <Grid item xs={12}>
      <Navbarpresentation links={links} />
    </Grid>
    </Grid>
  </Box>


  );
}

export default Navbarcontainer;
