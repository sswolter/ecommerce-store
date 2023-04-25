import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductsPage.module.scss";

const ProductsPage = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className={styles.Page}>
      <h1>All Products</h1>
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
                image={product.image}
                fav={product.fav}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ProductsPage;
