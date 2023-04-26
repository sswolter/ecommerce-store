import React, { createContext, useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsProvider";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Favourites.module.scss";

const Favourites = () => {
  const { fav } = useContext(ProductsContext);
  console.log(fav);

  return (
    <>
      <h1>Favourites</h1>
      <div className={styles.Cards}>
        {fav &&
          fav.map((fave) => {
            return (
              <ProductCard
                image={fave.image}
                key={fave.id}
                name={fave?.name}
                brand={fave.brand}
                price={fave.price}
                id={fave.id}
              />
            );
          })}
      </div>
    </>
  );
};

export default Favourites;
