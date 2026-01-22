"use client";

import { cartContext } from "@/context/CardProvider";
import React, { useContext } from "react";

const CartItems = () => {
  const { cart } = useContext(cartContext);

  return (
    <div>
      <h2>{cart.length} Items Added</h2>
    </div>
  );
};

export default CartItems;
