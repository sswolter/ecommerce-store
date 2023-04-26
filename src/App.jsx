import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsProvider from "./context/ProductsProvider";
import Home from "./containers/Home/Home";
import CartProvider from "./context/CartProvider";
import UpdateProvider, { UpdateContext } from "./context/UpdateProvider";
import Nav from "./components/Nav/Nav";
import Products from "./containers/Products/Products";
import Product from "./containers/Product/Product";
import Favourites from "./containers/Favourites/Favourites";
import Cart from "./containers/Cart/Cart";

function App() {
  return (
    <UpdateProvider>
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <div className="App">
              <Nav />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="products/:id" element={<Product />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </div>
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>
    </UpdateProvider>
  );
}

export default App;
