import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <NavLink to="/" className={styles.Link}>
        Home
      </NavLink>
      <NavLink to="/products" className={styles.Link}>
        Products
      </NavLink>
      <NavLink to="/favourites" className={styles.Link}>
        Favourites
      </NavLink>
      <NavLink to="/cart" className={styles.Link}>
        Cart
      </NavLink>
    </nav>
  );
};

export default Nav;
