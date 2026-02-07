import FeedbackCard from "@/components/cards/FeedbackCard";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "feedbacks",
};

const getFeedback = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback/`, {
    cache: "force-cache",
    next: { revalidate: 60 },
  });
  return await res.json();
};

const FeedbackPage = async () => {
  const feedback = await getFeedback();
  console.log(feedback);

  return (
    <div>
      <div className="">
        <h2 className="text-2xl font-bold">
          {feedback.length} Feedbacks found
        </h2>
        <div className="my-5">
          <Link href={"/feedback/add"} className="bg-amber-500 p-2 rounded-xl">
            Add Feedback
          </Link>
        </div>
      </div>
      <div className="my-3 space-y-5">
        {feedback.map((fd) => {
          return <FeedbackCard key={fd._id} feedback={fd}></FeedbackCard>;
        })}
      </div>
    </div>
  );
};

export default FeedbackPage;
