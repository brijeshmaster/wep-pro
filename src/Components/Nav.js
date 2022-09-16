import React from "react";
// import {VscSearch} from "react-icons/vs"
import {VscSearch} from "react-icons/vsc"

const Nav = () => {
  return (
    <>
      <header className="text-gray-600 body-font sticky top-0 bg-white">
        <div
          className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
          bis_skin_checked={1}
        >
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/logo.png" className="h-20 w-20" alt="" />
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <VscSearch className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-50 block w-full p-1 pl-10 pr-2 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
            />
          </div>
        </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
