import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartProvider";
import CartCard from "../../components/CartCard/CartCard";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import styles from "./CartPage.module.scss";
import { ProductsContext } from "../../context/ProductsProvider";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);
  const { updates, setUpdates } = useContext(ProductsContext);

  const getCart = async () => {
    const querySnapshot = await getDocs(collection(db, "cart"));
    const data = querySnapshot.docs.map((doc) => {
      const id = doc.id;
      const restOfData = doc.data();
      return { id, ...restOfData };
    });
    setCart(data);
  };

  useEffect(() => {
    getCart();
    setUpdates(updates + 1);
  }, [setUpdates]);

  return (
    <div className={styles.Page}>
      <h1>Cart</h1>
      <div className={styles.Cards}>
        {cart.map((product) => (
          <CartCard key={product.name} product={product} id={product.id} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
