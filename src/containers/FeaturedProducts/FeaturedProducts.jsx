import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./FeaturedProducts.module.scss";

const FeaturedProducts = () => {
  const { featuredProducts } = useContext(ProductsContext);
  // console.log(featuredProducts, "this is featured products");

  return (
    <div className={styles.Section}>
      <h1>Featured Products</h1>
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
                fav={product.fav}
                image={product.image}
              />
            );
          })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
