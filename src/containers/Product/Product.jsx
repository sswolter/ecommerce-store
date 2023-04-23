import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductsProvider, {
  ProductsContext,
} from "../../context/ProductsProvider";

const Product = () => {
  const { products } = useContext(ProductsContext);
  const { id } = useParams();
  const [foundProduct, setFoundProduct] = useState(null);
  console.log(id);

  useEffect(() => {
    const product = products.find((p) => p.id === id);
    setFoundProduct(product);
  }, [id, products]);

  if (!foundProduct) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Product
      <h1>{foundProduct.name}</h1>
      <p>{foundProduct.description}</p>
      <p>Price: ${foundProduct.price}</p>
    </div>
  );
};

export default Product;
