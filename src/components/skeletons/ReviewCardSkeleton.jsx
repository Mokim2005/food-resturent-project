import React from "react";

const ReviewCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 space-y-4 animate-pulse">
      {/* User */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full" />
        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-200 rounded" />
          <div className="h-3 w-20 bg-gray-200 rounded" />
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-4 w-4 bg-gray-200 rounded"
          />
        ))}
      </div>

      {/* Review text */}
      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-11/12 bg-gray-200 rounded" />
        <div className="h-4 w-4/5 bg-gray-200 rounded" />
      </div>

      {/* Button */}
      <div className="flex items-center gap-3 pt-2">
        <div className="h-9 w-24 bg-gray-200 rounded-full" />
        <div className="h-4 w-16 bg-gray-200 rounded" />
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;
