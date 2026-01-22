"use client";

import ReviewCard from "@/components/cards/reviewCard";
import React, { useEffect, useState } from "react";
import ReviewLoading from "./ReviewLoading";


const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data?.reviews || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []); // ✅ VERY IMPORTANT

  if (loading) {
    return <ReviewLoading></ReviewLoading>
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-10 space-y-8">
      <h2 className="text-4xl font-bold">
        Total <span className="text-yellow-600">{reviews.length}</span> Reviews
        Found
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((rev) => (
          <ReviewCard key={rev.id} review={rev} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
