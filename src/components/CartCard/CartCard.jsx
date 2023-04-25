import React from "react";
import { removeItem } from "../../services/cart";

const CartCard = ({ product }) => {
  const handleClick = async () => {
    await removeItem(product.id);
  };

  return (
    <div>
      <img src={product.image} alt="" height="250px" />
      <h5>{product.name}</h5>
      <p>${product.price}</p>
      <p>{product.quantity}</p>
      <button onClick={handleClick}>Remove Item</button>
    </div>
  );
};

export default CartCard;
