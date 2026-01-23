import React from "react";

export function generateStaticParams() {
  return [{ id: "52955" }, { id: "52955" }, { id: "52926" }];
}

const getSingleFood = async (id) => {
  try {
    const res = await fetch(
      `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
      { cache: "no-store" },
    );

    if (!res.ok) {
      console.error("Fetch failed");
      return null;
    }

    const data = await res.json();
    return data?.details ?? null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const Page = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-red-500">Food Not Found</h2>
      </div>
    );
  }

  const { title, foodImg, price, category, area, video } = food;

  console.log(food);

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={foodImg}
            alt={title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-5">
          <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-sm">
            {category}
          </span>

          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>

          <p className="text-gray-600">
            <span className="font-medium">Cuisine:</span> {area}
          </p>

          <p className="text-2xl font-bold text-stone-800">৳ {price}</p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 bg-stone-800 text-white rounded-xl hover:bg-stone-700 transition">
              Add to Cart
            </button>

            {video && (
              <a
                href={video}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-stone-800 rounded-xl text-stone-800 hover:bg-stone-800 hover:text-white transition"
              >
                Watch Recipe
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
