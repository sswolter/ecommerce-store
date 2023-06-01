import React, { useContext } from "react";
import { UpdateContext } from "../../context/UpdateProvider";
import { ProductsContext } from "../../context/ProductsProvider";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Products.module.scss";

const Products = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <>
        <h1>All products</h1>
        <div className={styles.Cards}>
          {products &&
            products.map((p) => {
              return (
                <ProductCard
                  key={p.id}
                  name={p.name}
                  brand={p.brand}
                  price={p.price}
                  id={p.id}
                  image={p.image}
                />
              );
            })}
        </div>
      </>
    </div>
  );
};

export default Products;
