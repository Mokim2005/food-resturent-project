import Link from "next/link";
import CartButtons from "../buttons/CartButtons";

const FoodCard = ({ food, onAddToCart, onViewDetails }) => {
  const { title, foodImg, id, price, category } = food;

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={foodImg}
          alt={title}
          className="h-full w-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <span className="inline-block text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-600">
          {category}
        </span>

        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {title}
        </h2>

        <p className="text-xl font-bold text-stone-800">৳ {price}</p>

        {/* Buttons */}
        <div className="flex gap-3 pt-3">
          <CartButtons food={food}></CartButtons>
          <Link
            href={`/foods/${id}`}
            onClick={onViewDetails}
            className="flex-1 border border-stone-800 text-stone-800 py-2 rounded-lg hover:bg-stone-800 hover:text-white transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
