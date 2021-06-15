import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ isAuthorized, setIsAuthorized }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/v1/rocket-lunch/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((result) => {
        if (result.status === 200 || result.status === 202) {
          localStorage.setItem("isAuthorized", !isAuthorized);
          setIsAuthorized(!isAuthorized);
          return result.json();
        } else {
          alert("Wrong Email or Password.");
        }
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("Id", data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <div className="pt-8 h-48 flex justify-center items-center text-6xl font-bold text-white animate-bounce transition rocket-font">
        Meet with Locals and Have Some Lunch!
      </div>
      {localStorage.getItem("isAuthorized") === null ? (
        <div className="flex h-full justify-center items-start">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-36 w-3/12">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <p className="text-red-500 text-xs italic hidden">
                Please choose a password.
              </p>
            </div>
            <div className="flex justify-start">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-3 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={(e) => {
                  signIn(e);
                }}
              >
                Sign In
              </button>
              <Link
                to="/signup"
                className="bg-white border-blue-500 border hover:bg-gray-200 text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      ) : (
        <div className="h-full flex flex-row justify-center items-center pt-32 pb-32">
          <button
            className="bg-red-400 hover:bg-red-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => {
              localStorage.removeItem("Id");
              localStorage.removeItem("isAuthorized");
              setIsAuthorized(!isAuthorized);
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
