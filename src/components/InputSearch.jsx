"use client";
import React from "react";

const InputSearch = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.search.value;
    console.log(value)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="px-1 py-3 border-2 rounded w-xl"
          type="text"
          name="search"
          placeholder="Enter Food name"
        />
        <button className="px-4 py-2 bg-yellow-700 text-black rounded cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
