import React, { useState, useEffect } from "react";
import Room from "./Room";

const Message = () => {
  const [rooms, setRooms] = useState([]);

  // 처음 로딩시에는 제일 첫번째 채팅방에서 대화 내용 불러오기

  // 클릭하면 해당 방의 대화내용 불러오기 post id와 현재 user id를 보내서 receiver, sender 모두 현재 유저 아이디를 조건으로 준 뒤 fetch
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
        if (data[0] != null) {
          setRooms(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <div className="flex justify-center h-screen">
      <div className="w-1/5 h-full bg-white border-gray-400 ml-5 shadow-xl rounded-md rounded-t-xl">
        {rooms !== []
          ? rooms.map((val, idx) => {
              return <Room key={idx} room={val} />;
            })
          : ""}
      </div>
      <div className="w-4/5 h-full bg-white border-gray-400 ml-5 shadow-xl rounded-md rounded-t-xl">
        <div class="flex flex-col h-full w-full bg-white">
          <div
            id="chat"
            class="flex mt-2 flex-col-reverse overflow-y-scroll h-full space-y-3 mb-20 pb-3 "
          >
            <div class="w-max ml-auto break-all mt-2 mb-1 p-2 rounded-br-none bg-blue-500 rounded-2xl text-white text-left mr-5">
              2/10
            </div>
            <div class="w-max ml-auto break-all mt-2 mb-1 p-2 rounded-br-none bg-blue-500 rounded-2xl text-white text-left mr-5">
              2/10
            </div>
            <div class="w-max ml-auto break-all mt-2 mb-1 p-2 rounded-br-none bg-blue-500 rounded-2xl text-white text-left mr-5">
              2/10
            </div>
            <div class="w-max ml-auto break-all mt-2 mb-1 p-2 rounded-br-none bg-blue-500 rounded-2xl text-white text-left mr-5">
              But numbers can
            </div>
            <div class="other break-all mt-2  ml-5 rounded-bl-none float-none bg-gray-300 mr-auto rounded-2xl p-2">
              Aww thx!!
            </div>
            <div class="w-max ml-auto break-all mt-2 mb-1 p-2 rounded-br-none bg-blue-500 rounded-2xl text-white text-left mr-5">
              Words can't describe how beautiful you are :)
            </div>
            <div class="other break-all mt-2  ml-5 rounded-bl-none float-none bg-gray-300 mr-auto rounded-2xl p-2">
              Words can't decsribe how ugly you are ;)
            </div>
          </div>
          <div class="flex flex-row  items-center  bottom-0 my-2 w-full">
            <div class="ml-2 flex flex-row border-gray items-center w-full border rounded-3xl h-12 px-2">
              <div class="w-full">
                <input
                  type="text"
                  id="message"
                  class="border rounded-2xl border-transparent w-full focus:outline-none text-sm h-10 flex items-center"
                  placeholder="Type your message...."
                />
              </div>
              <div class="flex flex-row"></div>
            </div>
            <div class="ml-3 mr-2">
              <button
                id="other"
                class="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 text-indigo-800 text-white focus:outline-none"
              >
                <svg
                  class="w-5 h-5 transform -rotate-90 -mr-px"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
