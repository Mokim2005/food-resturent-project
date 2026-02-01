"use client";

const FeedbackForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    const res = await fetch("http://localhost:3000/api/feedback/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = (await res).json();

    if (data.insertedId) {
      alert("success");
    }
  };

  return (
    <div className="space-y-5 text-center">
      <form onSubmit={handleSubmit}>
        <textarea
          name="message"
          required
          className="w-xl p-3 border border-dashed"
          cols="30"
          rows="10"
        ></textarea>

        <button type="submit" className="bg-amber-500 p-2 rounded-xl mt-3">
          Add Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
