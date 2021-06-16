import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const signUp = async (e) => {
    e.preventDefault();

    if (
      email === "" ||
      password === "" ||
      passwordConfirm === "" ||
      password !== passwordConfirm
    ) {
      alert("Please fill out the form.");
      return;
    }

    await fetch("http://localhost:8080/api/v1/rocket-lunch/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        username: username,
      }),
    })
      .then((res) => {
        if (res.status === 200 || res.status === 202) {
          alert("Signup Succesful.");
          console.log(res);
          document.getElementById("toHome").click();
        } else {
          alert(res.status, " : ", res.statusText);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex h-full justify-center items-start pt-7 bg-gray-50">
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
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="mb-2">
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
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="passwordConfirm"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="passwordConfirm"
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => {
                setPasswordConfirm(e.target.value);
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
                signUp(e);
              }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <Link id="toHome" to="/"></Link>
    </div>
  );
};

export default Signup;
