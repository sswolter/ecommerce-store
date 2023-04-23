import React from "react";
import styles from "./HomePage.module.scss";
import FeaturedProducts from "../../containers/FeaturedProducts/FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1582021111983-40a3a943b006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
        alt=""
        className={styles.Img}
      />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
