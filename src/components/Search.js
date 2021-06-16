import React, { useState, useEffect } from "react";
import SearchItem from "./SearchItem";

const Search = () => {
  const [posts, setPosts] = useState([]);
  const [food, setFood] = useState("");
  const [city, setCity] = useState("");
  const [time, setTime] = useState("");
  const [showModal, setShowModal] = useState(false);

  const getPosts = () => {
    fetch("http://localhost:8080/api/v1/rocket-lunch/posts", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addPost = () => {
    setShowModal(false);

    const params = {
      food: food,
      city: city,
      user: { id: localStorage.getItem("Id") },
      time: time,
    };

    fetch("http://localhost:8080/api/v1/rocket-lunch/addpost", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(posts.concat(params));

        getPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="h-full bg-gray-100 ">
      <div className="flex flex-row justify-center">
        <div className="p-8 w-6/12">
          <div className="bg-white flex items-center rounded-full shadow-xl">
            <input
              className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
              id="search"
              type="text"
              placeholder="Search"
            />
            <div className="p-4">
              <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                <i className="fa fa-search"></i>
              </button>
            </div>
            <div className="p-4">
              <button
                onClick={() => setShowModal(true)}
                className="bg-red-400 text-white rounded-full p-2 hover:bg-red-300 focus:outline-none w-12 h-12 flex items-center justify-center"
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="h-full w-screen flex flex-col justify-start items-center">
          {posts.map((val, idx) => {
            return (
              <SearchItem
                key={val.id}
                city={val.city}
                food={val.food}
                username={val.user.username}
                user_id={val.user.id}
                time={val.time}
              />
            );
          })}
        </div>
      </div>
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Add Post</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="p-6">
                    <form className="bg-white px-8 pt-6 pb-8 w-full">
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="food"
                        >
                          Food
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="food"
                          type="text"
                          placeholder="Food"
                          onChange={(e) => {
                            setFood(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="city"
                        >
                          City
                        </label>
                        <input
                          className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          id="city"
                          type="text"
                          placeholder="City"
                          onChange={(e) => {
                            setCity(e.target.value);
                          }}
                        />
                        <p className="text-red-500 text-xs italic hidden">
                          Please choose a password.
                        </p>
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="time"
                        >
                          Date / Time
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="time"
                          type="datetime-local"
                          onChange={(e) => {
                            setTime(e.target.value);
                          }}
                        />
                      </div>
                    </form>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-white bg-red-400 rounded font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className=" text-white bg-blue-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        addPost();
                      }}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    </div>
  );
};

export default Search;
