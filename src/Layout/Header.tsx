import React, { useState } from "react";
import Logo from "../Assets/lspd11.png";
import { LinkList } from "./LinkList";

const Header = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  const ToggleIsCollapse = () => setIsCollapse(!isCollapse);
  return (
    <div className="z-20 flex flex-wrap w-full p-2 bg-blue-800">
      <div className="p-2 mx-auto text-center text-gray-700">
        <img alt="lspdLogo" className="hidden m-auto sm:block" src={Logo}></img>
        <hr className="hidden my-4 sm:block" />
        <h1 className="hidden text-2xl text-white sm:block">LSPD BBCODE GENERATOR</h1>
      </div>
      <nav className="flex flex-wrap items-center justify-between w-full p-6">
        <p className="block text-white sm:hidden">LSPD BBCODE GENERATOR</p>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 text-gray-200 border border-gray-400 rounded hover:text-white hover:border-white"
            onClick={ToggleIsCollapse}
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={`flex-grow block w-full lg:flex lg:items-center lg:w-auto ${isCollapse ? "block" : "hidden"}`}>
          <div className="text-sm text-center lg:flex-grow">
            <LinkList />
          </div>
        </div>
      </nav>
    </div>
  );
};

export { Header };
