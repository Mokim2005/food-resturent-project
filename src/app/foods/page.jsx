import FoodCard from "@/components/cards/FoodCard";
import React from "react";
import { resolve } from "styled-jsx/css";

const getFoods = async () => {
  const res = await fetch(
    " https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
  );
  const data = await res.json();
  await new Promise((resolve)=> setTimeout(resolve, 3000))
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
      <div className="grid grid-cols-3 gap-5">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default foodsPage;
