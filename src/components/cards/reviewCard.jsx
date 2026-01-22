"use client"
import React from "react";

const ReviewCard = ({ review, onLike }) => {
  const { user, photo, rating, review: comment, likes, date } = review;

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 space-y-4">
      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold text-gray-800">{user}</h4>
          <p className="text-sm text-gray-500">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 leading-relaxed">{comment}</p>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-2">
        <button
          onClick={onLike}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white transition"
        >
          👍 Like
        </button>

        <span className="text-sm text-gray-500">{likes.length} likes</span>
      </div>
    </div>
  );
};

export default ReviewCard;
