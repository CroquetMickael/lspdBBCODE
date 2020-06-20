import React, { Component, FunctionComponentElement, useState } from "react";

interface Accordeon {
  children: FunctionComponentElement<Component>;
  title: string;
  width?: string;
}

const Accordeon = (props: Accordeon) => {
  const [isCollapse, setIsCollapse] = useState(false);
  const ToggleIsCollapse = () => setIsCollapse(!isCollapse);
  return (
    <div className="w-full shadow">
      <div
        className="flex items-center justify-between w-full p-5 pl-8 pr-8 cursor-pointer select-none"
        onClick={ToggleIsCollapse}
      >
        <span className="text-xl font-thin text-indigo">{props.title}</span>
        <div className="flex items-center justify-center border rounded-full border-grey w-7 h-7">
          <svg
            aria-hidden="true"
            className=""
            data-reactid="266"
            fill="none"
            height="24"
            stroke="#606F7B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
      <div className="relative">
        <div
          className={`bg-white text-grey-darkest ease-in-out shadow absolute delay-75 z-30 w-full transition duration-300 overflow-hidden ${
            isCollapse ? "h-auto" : "h-0 "
          }`}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};

export { Accordeon };
