import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsProvider from "./context/ProductsProvider";
import Home from "./containers/Home/Home";
import CartProvider from "./context/CartProvider";
import UpdateProvider, { UpdateContext } from "./context/UpdateProvider";
import Nav from "./components/Nav/Nav";

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
                {/* <Route path="/products" element={<ProductsPage />} />
                <Route path="products/:id" element={<Product />} />
                <Route path="/favourites" element={<FavouritesPage />} /> */}
                {/* <Route path="/cart" element={<CartPage />} /> */}
              </Routes>
            </div>
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>
    </UpdateProvider>
  );
}

export default App;
