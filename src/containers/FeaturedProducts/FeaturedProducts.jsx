import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./FeaturedProducts.module.scss";

const FeaturedProducts = () => {
  const { featuredProducts } = useContext(ProductsContext);
  console.log(featuredProducts, "this is featured products");

  return (
    <>
      <h1>featured</h1>
      <div className={styles.Cards}>
        {featuredProducts &&
          featuredProducts.map((product) => {
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
    </>
  );
};

export default FeaturedProducts;
