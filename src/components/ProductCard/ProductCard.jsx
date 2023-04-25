import React from "react";
import styles from "./ProductCard.module.scss";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

const ProductCard = ({ brand, name, image, price, id, fav }) => {
  return (
    <div className={styles.Card}>
      <NavLink to={`/products/${id}`}>
        <section className={styles.Card_Details}>
          <img src={image} alt="" className={styles.Img} />
          <p className={styles.Brand}>{brand}</p>
          <h3>{name}</h3>
          <p>${price}</p>
        </section>
      </NavLink>
      <Button id={id} fav={fav} />
    </div>
  );
};

export default ProductCard;
