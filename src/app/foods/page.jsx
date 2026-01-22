import FoodCard from "@/components/cards/FoodCard";
import React from "react";
import { resolve } from "styled-jsx/css";
import CartItems from "./CartItems";
import InputSearch from "@/components/InputSearch";

const getFoods = async () => {
  const res = await fetch(
    " https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.foods || [];
};

const foodsPage = async () => {
  const foods = await getFoods();
  return (
    <div className="">
      <h2 className="text-4xl font-bold">
        Total <span className="text-yellow-600">{foods.length}</span> Foods
        Found
      </h2>
      <div className="my-4">
        <InputSearch></InputSearch>
      </div>
      <div className="flex gap-5">
        <div className="flex-1 grid md:grid-cols-2 grid-cols-1 items-center justify-center lg:grid-cols-3 gap-5">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food}></FoodCard>
          ))}
        </div>
        <div className="w-[250px] border-2 rounded-xl p-4">
          <h2 className="text-2xl font-bold">Cart Items</h2>
          <hr />
          <CartItems></CartItems>
        </div>
      </div>
    </div>
  );
};

export default foodsPage;
