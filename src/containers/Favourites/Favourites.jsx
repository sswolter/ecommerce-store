import React, { createContext, useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsProvider";
import ProductCard from "../../components/ProductCard/ProductCard";

const Favourites = () => {
  const { fav } = useContext(ProductsContext);
  console.log(fav);

  return (
    <>
      <h1>fav page</h1>
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
    </>
  );
};

export default Favourites;
