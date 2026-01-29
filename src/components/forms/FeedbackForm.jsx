"use-client";

const FeedbackForm = () => {
  return (
    <div className="space-y-5 text-center">
      <form>
        <textarea
          name="message"
          required
          className="w-xl p-3 border border-dashed"
          cols="30"
          rows="10"
          id=""
        ></textarea>
      </form>
      <button className="bg-amber-500 p-2 rounded-xl">Add Feedback</button>
    </div>
  );
};

export default FeedbackForm;
