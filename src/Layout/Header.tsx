import React from "react";
import Logo from "../Assets/lspd11.png";
import { Link } from "@reach/router";
import { LinkList } from "./LinkList";

const Header = () => (
  <div className="flex flex-wrap w-full bg-blue-800 p-2 z-20">
    <div className="text-gray-700 text-center mx-auto p-2">
      <img alt="lspdLogo" className="m-auto" src={Logo}></img>
      <hr className="my-4" />
      <h1 className="text-2xl text-white">LSPD BBCODE GENERATOR</h1>
    </div>
    <nav className="flex w-full items-center justify-between flex-wrap  p-6">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow text-center">
          <LinkList />
        </div>
      </div>
    </nav>
  </div>
);

export { Header };
