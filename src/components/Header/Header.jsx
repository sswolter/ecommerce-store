import React from "react";
import Nav from "../Nav/Nav";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.Header}>
      <Nav />
    </div>
  );
};

export default Header;
