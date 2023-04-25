import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductsProvider, {
  ProductsContext,
} from "../../context/ProductsProvider";
import { getProductById } from "../../services/products";
import Button from "../../components/Button/Button";
import styles from "./Product.module.scss";

const Product = () => {
  // const { products } = useContext(ProductsContext);
  const { id } = useParams();
  // console.log(useParams());
  const [foundProduct, setFoundProduct] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const wrapper = async () => {
      try {
        const data = await getProductById(id);
        setFoundProduct(data);
      } catch (e) {
        setError(true);
      }
    };

    wrapper();
  }, [id]);

  console.log(foundProduct);
  //add if else to return loading also
  return !error && foundProduct ? (
    <div className={styles.Page}>
      <img src={foundProduct.image} alt="" className={styles.Img} />
      <section className={styles.Info}>
        <h1>{foundProduct?.name}</h1>
        <p>{foundProduct?.description}</p>
        <p>${foundProduct?.price}</p>
        <p>{foundProduct?.fav ?? "no data"}</p>
        {/* <button onClick={handleClick}>fav</button> */}
      </section>
    </div>
  ) : (
    <p>No product found</p>
  );
};

export default Product;
