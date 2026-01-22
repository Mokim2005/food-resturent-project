import React from "react";

const Loading = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 py-10 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Skeleton */}
        <div className="h-[350px] w-full bg-gray-200 rounded-2xl" />

        {/* Content Skeleton */}
        <div className="space-y-5">
          <div className="h-6 w-24 bg-gray-200 rounded-full" />

          <div className="h-8 w-3/4 bg-gray-200 rounded" />

          <div className="h-4 w-40 bg-gray-200 rounded" />

          <div className="h-7 w-32 bg-gray-200 rounded" />

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <div className="h-12 w-40 bg-gray-200 rounded-xl" />
            <div className="h-12 w-40 bg-gray-200 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
