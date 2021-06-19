import React from "react";

const Message = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="w-1/5 h-full bg-white border-gray-400 ml-5 shadow-xl rounded-md rounded-t-xl">
        <div className="flex justify-between m-5 w-11/12 h-20 bg-white border-gray-400 ml-5 shadow-xl rounded-md rounded-t-xl font-mono p-2">
          <div>
            <div className="border-b-1">James</div>
            <div className="border-b-1">Kimchi</div>
            <div className="border-b-1">Seoul, South Korea</div>
          </div>
          <div className="border-red-400 bg-red-400 rounded-tl-none rounded-bl-none rounded-md w-2/12 h-full font-mono text-white flex justify-center items-center text-3xl">
            X
          </div>
        </div>

        <div className="m-5 w-11/12 h-20 bg-white border-gray-400 ml-5 shadow-xl rounded-md rounded-t-xl"></div>
        <div className="m-5 w-11/12 h-20 bg-white border-gray-400 ml-5 shadow-xl rounded-md rounded-t-xl"></div>
      </div>
      <div className="w-4/5 h-full bg-white border-gray-400 ml-5 shadow-xl rounded-md rounded-t-xl"></div>
    </div>
  );
};

export default Message;
