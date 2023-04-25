import React from "react";
import styles from "./HomePage.module.scss";
import FeaturedProducts from "../../containers/FeaturedProducts/FeaturedProducts";
import Carousel from "../../components/Carousel/Carousel";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
