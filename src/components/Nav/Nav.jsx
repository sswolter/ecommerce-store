import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <NavLink to="/">Home</NavLink>
      <div className={styles.Nav_Products}>
        <NavLink to="/products" className={styles.nav__shop_link}>
          Products
        </NavLink>
        <ul className={styles.Nav_Cat}>
          <li>
            <NavLink to="/products/category/food">Food</NavLink>
          </li>
          <li>
            <NavLink to="/products/category/hay">Hay</NavLink>
          </li>
          <li>
            <NavLink to="/products/category/enrichment">Enrichment</NavLink>
          </li>
        </ul>
      </div>
      <NavLink to="/favourites">Favourites</NavLink>
    </nav>
  );
};

export default Nav;
