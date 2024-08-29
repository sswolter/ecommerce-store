import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import cart from "/cart.svg";
import search from "/search.svg";

const ProductCard = ({ name, brand, price, image, id, variants }) => {
  console.log(variants);
  return (
    <div>
      <div className={styles.Card}>
        <NavLink to={`/products/${id}`}>
          <img src={image} alt="" height="200px" />
          <h3>{name}</h3>
          <p className={styles.Brand}>{brand}</p>
          <p>${price}</p>
        </NavLink>
        <div className={styles.ButtonContainer}>
          <div className={styles.Button}>
            <img src={cart} alt="" />
          </div>
          <NavLink to={`/products/${id}`}>
            <div className={styles.Button}>
              <img src={search} alt="" />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
