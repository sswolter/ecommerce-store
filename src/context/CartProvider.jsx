import React, { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartVar, setCartVar] = useState("");
  const [btnAdded, setBtnAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        cartVar,
        setCartVar,
        quantity,
        setQuantity,
        btnAdded,
        setBtnAdded,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
