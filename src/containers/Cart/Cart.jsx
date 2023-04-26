import React, { useEffect, useContext, useState } from "react";
import { CartContext } from "../../context/CartProvider";
import { UpdateContext } from "../../context/UpdateProvider";
import { getCart } from "../../services/cart";

const Cart = () => {
  const { updated, setUpdated } = useContext(UpdateContext);
  const { cart } = useContext(CartContext);
  const [newCart, setNewCart] = useState([]);

  useEffect(() => {
    const wrapper = async () => {
      const allItems = await getCart();
      console.log(allItems);
      setNewCart(allItems);
    };
    wrapper();
  }, [updated]);

  return <div>Cart</div>;
};

export default Cart;
