import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbarcontainer from "./components/NavBar/Navbarcontainer";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/cartContext";
import { FormCheckoutContainer } from "./components/FormCheckout/FormCheckoutContainer";
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
      <Navbarcontainer />
        <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />  
          <Route path="/checkout" element={<FormCheckoutContainer />} />                  
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
