import { useEffect, useState } from "react";
import { getAllProducts } from "./services/products";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductCard from "./components/ProductCard/ProductCard";
import ProductsProvider from "./context/ProductsProvider";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import Test from "./components/Test/Test";
import HomePage from "./pages/HomePage/HomePage";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Product from "./containers/Product/Product";

function App() {
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <ProductsProvider>
      <BrowserRouter>
        <div className="App">
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="products/:id" element={<Product />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ProductsProvider>
  );
}

export default App;
