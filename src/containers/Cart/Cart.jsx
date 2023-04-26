import React, { useEffect, useContext, useState } from "react";
import { CartContext } from "../../context/CartProvider";
import { UpdateContext } from "../../context/UpdateProvider";
import { getCart } from "../../services/cart";
import ProductCard from "../../components/ProductCard/ProductCard";
import { removeItem } from "../../services/cart";
import styles from "./Cart.module.scss";

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

  const handleClick = async (id) => {
    await removeItem(id);
    setUpdated(updated + 1);
  };

  return (
    <>
      <h1>Cart</h1>
      <div className={styles.Cards}>
        {newCart &&
          newCart.map((item) => {
            return (
              <div key={item.id} className={styles.Item}>
                <img src={item.image} alt="" height="250px" />
                <section className={styles.Item_Info}>
                  <h3>{item.name}</h3>
                  <p>Quanity: {item.quantity}</p>
                  <p>${item.price}</p>
                  <button onClick={() => handleClick(item.id)}>Remove</button>
                </section>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Cart;
