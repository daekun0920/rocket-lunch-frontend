import React from "react";
import SearchItem from "./SearchItem";

const Search = () => {
  return (
    <div className="h-full bg-gray-100 ">
      <div className="flex flex-row justify-center">
        <div className="p-8 w-3/12">
          <div className="bg-white flex items-center rounded-full shadow-xl">
            <input
              className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
              id="search"
              type="text"
              placeholder="Search"
            />
            <div className="p-4">
              <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                <i class="fa fa-search"></i>
              </button>
            </div>
            <div className="p-4">
              <button className="bg-red-400 text-white rounded-full p-2 hover:bg-red-300 focus:outline-none w-12 h-12 flex items-center justify-center">
                <i class="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="h-full w-screen flex flex-col justify-start items-center">
          <SearchItem city="Seoul, South Korea" food="Pizza" />
          <SearchItem city="Busan, South Korea" food="Pizza" />
          <SearchItem city="Seoul, South Korea" food="Pizza" />
          <SearchItem city="Seoul, South Korea" food="Pizza" />
          <SearchItem city="Seoul, South Korea" food="Pizza" />
          <SearchItem city="Seoul, South Korea" food="Pizza" />
          <SearchItem city="Seoul, South Korea" food="Pizza" />
          <SearchItem city="Seoul, South Korea" food="Pizza" />
          <SearchItem city="Seoul, South Korea" food="Pizza" />
          <SearchItem city="Seoul, South Korea" food="Pizza" />
        </div>
      </div>
    </div>
  );
};

export default Search;
