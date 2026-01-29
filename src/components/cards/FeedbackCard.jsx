"use client";

import { formatDistanceToNow } from "date-fns";

export default function FeedbackCard({ feedback, onUpdate, onDelete }) {
  const { _id, message, date } = feedback;

  return (
    <div className="rounded-xl border border-gray-200 p-4 bg-white shadow-sm space-y-3">
      <p className="text-gray-800">{message}</p>

      {date && (
        <p className="text-sm text-gray-500">
          {formatDistanceToNow(new Date(date), { addSuffix: true })}
        </p>
      )}

      <div className="flex gap-2 pt-2">
        <button
          onClick={() => onUpdate(_id)}
          className="px-4 py-1.5 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600"
        >
          Update
        </button>

        <button
          onClick={() => onDelete(_id)}
          className="px-4 py-1.5 text-sm rounded-md bg-red-500 text-white hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
