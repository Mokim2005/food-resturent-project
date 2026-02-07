"use client";

import { useRouter } from "next/navigation";


const FeedbackForm = () => {
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = e.target.message.value;

    const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();

    if (data.insertedId) {
      alert("Are You Sure!");
      e.target.reset();
      router.push("/feedback")
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md"
      >
        <textarea
          name="message"
          required
          placeholder="Write your feedback..."
          className="p-3 border border-dashed rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
          rows="6"
        ></textarea>

        <button
          type="submit"
          className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition"
        >
          Add Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
