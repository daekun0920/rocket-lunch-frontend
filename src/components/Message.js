import React, { useState, useEffect } from "react";
import Room from "./Room";

const Message = () => {
  const [rooms, setRooms] = useState([]);

  const getRooms = () => {
    fetch(
      "http://localhost:8080/api/v1/rocket-lunch/rooms?id=" +
        localStorage.getItem("Id"),
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRooms(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="w-1/5 h-full bg-white border-gray-400 ml-5 shadow-xl rounded-md rounded-t-xl">
        {rooms.map((val, idx) => {
          return <Room room={val} />;
        })}
      </div>
      <div className="w-4/5 h-full bg-white border-gray-400 ml-5 shadow-xl rounded-md rounded-t-xl"></div>
    </div>
  );
};

export default Message;
