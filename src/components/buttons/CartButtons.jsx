"use client";
import { cartContext } from "@/context/CardProvider";
import React, { use, useState } from "react";

const CartButtons = ({food}) => {
  const [inCart, setInCart] = useState(false);
  const {addToCart} = use(cartContext)


  const onAddToCart = () => {
    addToCart(food)
    setInCart(true);
  };

  return (
    <button
      onClick={onAddToCart}
      disabled={inCart}
      className="
      flex-1 bg-yellow-800 text-white py-2 rounded-lg
       hover:bg-stone-700 transition disabled:bg-gray-800"
    >
      {inCart ? "Added" : " Add to Cart"}
    </button>
  );
};

export default CartButtons;
