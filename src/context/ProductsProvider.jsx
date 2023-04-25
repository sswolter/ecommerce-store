import React, { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/products";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [featuredProducts, setFeaturedProducts] = useState(null);
  const [favProducts, setFaveProducts] = useState(null);
  const [favoritesUpdated, setFavoritesUpdated] = useState(false);
  const [updates, setUpdates] = useState(0);

  // all products
  const productsAsync = async () => {
    const allProducts = await getAllProducts();
    setProducts(allProducts);
  };

  useEffect(() => {
    productsAsync();
  }, []);

  // featured products
  useEffect(() => {
    if (products) {
      const featPro = products.filter((product) => product.featured);
      setFeaturedProducts(featPro);
    }
  }, [products]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        featuredProducts,
        favProducts,
        setFaveProducts,
        favoritesUpdated,
        setFavoritesUpdated,
        updates,
        setUpdates,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
