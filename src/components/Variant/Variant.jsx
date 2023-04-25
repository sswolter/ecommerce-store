import React from "react";
import styles from "./Variant.module.scss";

const Variant = ({ variant, onClick }) => {
  return (
    <button className={styles.Button} onClick={() => onClick(variant)}>
      {variant}
    </button>
  );
};

export default Variant;
