import React from "react";

const Room = ({ room }) => {
  return (
    <div className="flex justify-between m-5 w-11/12 h-20 bg-white border-gray-400 ml-5 shadow-xl rounded-md rounded-t-xl font-mono p-2 cursor-pointer">
      <div>
        <div className="border-b-1">{room.post.user.username}</div>
        <div className="border-b-1">{room.post.food}</div>
        <div className="border-b-1">{room.post.city}</div>
      </div>
      <div className="border-red-400 bg-red-400 rounded-tl-none rounded-bl-none rounded-md w-2/12 h-full font-mono text-white flex justify-center items-center text-3xl">
        X
      </div>
    </div>
  );
};

export default Room;
