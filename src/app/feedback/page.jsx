import React from "react";
export const metadata = {
  title: "feedbacks",
};

const getFeedback = async()=>{
    const res = await fetch("http://localhost:3000/api/feedback/")
    return await res.json()
}

const FeedbackPage = async () => {
const feedbakc = await getFeedback()
  return <div>
    <div className="">
        <h2 className="text-2xl font-bold">{feedbakc.length} Feedbacks found</h2>
    </div>
  </div>;
};

export default FeedbackPage;
