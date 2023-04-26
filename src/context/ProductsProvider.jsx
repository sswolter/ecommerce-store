import React, { createContext, useContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/products";
import { UpdateContext } from "./UpdateProvider";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const { updated } = useContext(UpdateContext);
  const [products, setProducts] = useState(null);
  const [fav, setFav] = useState(null);
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    const wrapper = async () => {
      const allProducts = await getAllProducts();
      setProducts(allProducts);
    };
    wrapper();
  }, [updated]);

  useEffect(() => {
    if (products) {
      const faveProducts = products.filter((p) => p.fav);
      setFav(faveProducts);
    }
  }, [products, updated]);

  useEffect(() => {
    if (products) {
      const featPro = products.filter((product) => product.featured);
      setFeatured(featPro);
    }
  }, [products]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        fav,
        setFav,
        featured,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
