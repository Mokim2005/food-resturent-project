import FoodCard from "@/components/cards/FoodCard";
import React, { Suspense } from "react";
import CartItems from "./CartItems";
import InputSearch from "@/components/InputSearch";
import next from "next";

export const metadata = {
  title: "All Foods",
  description: "Best FastFood is Dinajpur",
};

const getFoods = async (search) => {
  try {
    // API URL-e query string-er handle kora (Search empty thakle full list ashar kotha)
    const url = search
      ? `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`
      : `https://taxi-kitchen-api.vercel.app/api/v1/foods/random`;

    const res = await fetch(url, {
      next: { revalidate: 10 }, // ✅ 10s পর নতুন data
      cache: "force-cache", // ✅ reload এ same data
    });
    if (!res.ok) {
      console.error("API Fetch Error:", res.status);
      return [];
    }

    const data = await res.json();

    // API structure check: data.foods na thakle direct 'data' array kina dekha
    // Onek somoy API theke data.foods ase, abar kokhono direct array ase.
    return data.foods || data || [];
  } catch (error) {
    console.error("Fetch failed:", error);
    return [];
  }
};

const FoodsPage = async ({ searchParams }) => {
  // Next.js 15: searchParams promise handle kora
  const params = await searchParams;
  const search = params.search || "";
  const foods = await getFoods(search);

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold">
        Total <span className="text-yellow-600">{foods?.length || 0}</span>{" "}
        Foods Found
      </h2>

      <div className="my-4">
        <Suspense fallback={<div>Loading Search...</div>}>
          <InputSearch />
        </Suspense>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Mapping safe rakhar jonno optional chaining (?) use kora */}
          {foods && foods.length > 0 ? (
            foods.map((food, index) => (
              <FoodCard key={food._id || food.id || index} food={food} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-xl text-gray-500">
                No foods found for "{search}"
              </p>
            </div>
          )}
        </div>

        <div className="w-full md:w-[300px] border-2 rounded-xl p-4 h-fit sticky top-4">
          <h2 className="text-2xl font-bold">Cart Items</h2>
          <hr className="my-2" />
          <CartItems />
        </div>
      </div>
    </div>
  );
};

export default FoodsPage;
