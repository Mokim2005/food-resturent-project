const FoodCardSkeleton = () => {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="h-48 bg-gray-200" />

      {/* Content skeleton */}
      <div className="p-4 space-y-3">
        <div className="h-4 w-20 bg-gray-200 rounded" />
        <div className="h-5 w-3/4 bg-gray-200 rounded" />
        <div className="h-6 w-24 bg-gray-200 rounded" />

        <div className="flex gap-3 pt-3">
          <div className="h-10 flex-1 bg-gray-200 rounded-lg" />
          <div className="h-10 flex-1 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
