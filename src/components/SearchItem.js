import React from "react";

const SearchItem = ({ city, food }) => {
  return (
    <div className="h-40 w-6/12 border-2 border-gray-100 rounded-lg shadow-md bg-white mb-6">
      <div className="pl-2 border-2 border-red-300 rounded-lg rounded-b-none text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 font-bold font-mono">
        {city}
      </div>
      <div className="h-3/4">
        <div className="pl-6 h-full font-mono font-bold text-3xl flex flex-row justify-between items-center">
          <p>We are having..."{food}"!</p>
          <button className="p-3 mr-4 text-xl rounded-md shadow-md text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
