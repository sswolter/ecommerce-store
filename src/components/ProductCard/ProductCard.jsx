import React from "react";
import styles from "./ProductCard.module.scss";
import { NavLink } from "react-router-dom";

const ProductCard = ({ brand, name, image, price, id }) => {
  return (
    <div className={styles.Card}>
      <NavLink to={`/products/${id}`}>
        <img src="https://placehold.co/200x200" alt="" />
        <section className={styles.Card_Details}>
          <p>{brand}</p>
          <h3>{name}</h3>
          <p>${price}</p>
        </section>
      </NavLink>
    </div>
  );
};

export default ProductCard;
