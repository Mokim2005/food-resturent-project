"use client";

import React, { createContext, useState } from "react";

export const cartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [item, ...prev]);
  };

  const cartInfo = {
    cart,
    addToCart,
  };

  return (
    <cartContext.Provider value={cartInfo}>{children}</cartContext.Provider>
  );
};

export default CartProvider;
