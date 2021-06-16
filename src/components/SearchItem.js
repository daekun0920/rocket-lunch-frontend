import React from "react";

const SearchItem = ({ city, food, username, user_id, time }) => {
  return (
    <div className="h-40 w-6/12 border-2 border-gray-100 rounded-lg shadow-md bg-white mb-6">
      <div className="pl-2 border-2 border-red-300 rounded-lg rounded-b-none text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 font-bold font-mono">
        {city}
      </div>
      <div className="pl-6 h-4/4">
        <div className="h-full font-mono font-bold text-3xl flex flex-row justify-between items-start pt-4">
          <p>We are having..."{food}"!</p>

          <div className="">
            <button className="p-3 mr-4 text-xl rounded-md shadow-md text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
              Join
            </button>
          </div>
        </div>
        <div className="font-mono text-xl">Host: {username}</div>
        <div className="font-mono text-lg-">{time.split("T").join(" ")}</div>
      </div>
    </div>
  );
};

export default SearchItem;
