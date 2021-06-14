import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav
      className="pl-2 border-b-2 border-gray-100 flex justify-evenly items-center h-20 bg-white text-black relative shadow-md"
      role="navigation"
    >
      <Link to="/" className="cursor-pointer xl:font-bold text-3xl rocket-font">
        🚀Rocket Lunch
      </Link>
      <div className="pr-8">
        <Link className="p-4" to="/">
          Home
        </Link>
        <Link className="p-4" to="/search">
          Search
        </Link>
        <Link className="p-4" to="/search">
          Profile
        </Link>
        <Link className="p-4" to="/search">
          Message
        </Link>
        {/* <Link className="p-4" to="/login">
          Login
        </Link>
        <Link className="p-4" to="/signup">
          Sign Up
        </Link> */}
      </div>
    </nav>
  );
};

export default Header;
