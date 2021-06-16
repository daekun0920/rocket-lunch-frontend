import React, { setState } from "react";
import { Link } from "react-router-dom";
const Header = ({ isAuthorized, setIsAuthorized }) => {
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
        {isAuthorized !== false ? (
          <>
            <Link className="p-4" to="/profile">
              Profile
            </Link>
            <Link className="p-4" to="/message">
              Message
            </Link>
          </>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Header;
