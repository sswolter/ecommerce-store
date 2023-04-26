import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ name, brand, price, image, id }) => {
  return (
    <div>
      <NavLink to={`/products/${id}`}>
        <div className={styles.Card}>
          <img src={image} alt="" height="200px" />
          <h3>{name}</h3>
          <p className={styles.Brand}>{brand}</p>
          <p>${price}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default ProductCard;
