import React, { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/products";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [featuredProducts, setFeaturedProducts] = useState(null);
  const [favProducts, setFaveProducts] = useState(null);
  const [favoritesUpdated, setFavoritesUpdated] = useState(false);

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

  // favourited products
  // useEffect(() => {
  //   if (products) {
  //     const favPro = products.filter((product) => product.fav);
  //     setFaveProducts(favPro);
  //     // setUpdated(updated + 1);
  //   }
  // }, [products]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        featuredProducts,
        favProducts,
        setFaveProducts,
        favoritesUpdated,
        setFavoritesUpdated,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
