import React, { useContext, useEffect, useState } from "react";
import styles from "./Button.module.scss";
import { ProductsContext } from "../../context/ProductsProvider";
import { getProductById, updateProduct } from "../../services/products";

const Button = ({ id, fav }) => {
  const { favProducts } = useContext(ProductsContext);

  const [foundProduct, setFoundProduct] = useState(null);
  // console.log(fav, "This is fav");

  const getProduct = async () => {
    const data = await getProductById(id);
    setFoundProduct(data);
    // console.log(data, "THIS IS DATA");
  };

  useEffect(() => {
    getProduct();
  }, [favProducts]);

  const handleClick = async () => {
    await updateProduct(id, { fav: !foundProduct?.fav });
    getProduct();
  };

  const buttonClass = foundProduct?.fav
    ? `${styles.Button_True} ${styles.Button}`
    : `${styles.Button}`;

  return (
    <button className={buttonClass} onClick={handleClick}>
      Favourite
    </button>
  );
};

export default Button;
