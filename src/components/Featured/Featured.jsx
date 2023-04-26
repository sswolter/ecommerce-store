import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Featured.module.scss";

const FeaturedProducts = () => {
  const { featured } = useContext(ProductsContext);
  // console.log(featuredProducts, "this is featured products");

  return (
    <div>
      <h1>Featured Products</h1>
      <div className={styles.Cards}>
        {featured &&
          featured.map((product) => {
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
