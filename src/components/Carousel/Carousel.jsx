import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Carousel.module.scss";

const CarouselPage = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowNext={() => null}
      renderArrowPrev={() => null}
      className={styles.Carousel}
    >
      <div className={styles.Slide}>
        <img
          src="https://images.unsplash.com/photo-1582021111983-40a3a943b006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          alt=""
          className={styles.Img}
        />
      </div>

      <div className={styles.Slide}>
        <img src="https://images.unsplash.com/photo-1469532804526-98aa275b657c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" />
      </div>

      <div className={styles.Slide}>
        <img
          src="https://images.unsplash.com/photo-1617398881039-4c977f633b0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          className={styles.Img}
        />
      </div>
    </Carousel>
  );
};

export default CarouselPage;
