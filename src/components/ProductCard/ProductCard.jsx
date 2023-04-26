import React from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({ name, brand, price, image, id }) => {
  return (
    <div>
      <NavLink to={`/products/${id}`}>
        <div>
          <img src={image} alt="" height="200px" />
          <h3>{name}</h3>
          <p>{brand}</p>
          <p>{price}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default ProductCard;
