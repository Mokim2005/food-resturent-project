"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const InputSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.search.value;

    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    
    // Nicher line-ti search param update korbe
    router.push(`?${params.toString()}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          className="px-4 py-2 border-2 rounded w-full max-w-md"
          type="text"
          name="search"
          placeholder="Enter Food name"
          defaultValue={searchParams.get("search") || ""}
        />
        <button 
          type="submit" 
          className="px-6 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default InputSearch;