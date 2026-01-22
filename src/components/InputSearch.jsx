import React from "react";

const InputSearch = () => {
  return (
    <div>
      <form>
        <input
          className="px-1 py-3 border-2 rounded w-xl"
          type="text"
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
