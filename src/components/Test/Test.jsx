import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider";

const Test = () => {
  const { products, setProducts } = useContext(ProductsContext);

  return (
    <div>
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
          </div>
        ))}
    </div>
  );
};

export default Test;
