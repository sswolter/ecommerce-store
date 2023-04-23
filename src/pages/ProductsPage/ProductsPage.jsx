import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductsPage.module.scss";

const ProductsPage = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);
  return (
    <div className={styles.Cards}>
      {products &&
        products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              brand={product.brand}
              name={product.name}
              price={product.price}
              id={product.id}
            />
          );
        })}
    </div>
  );
};

export default ProductsPage;
