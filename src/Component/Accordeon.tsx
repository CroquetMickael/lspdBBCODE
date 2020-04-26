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
    <div className="shadow w-full">
        <div
          className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none w-full"
          onClick={ToggleIsCollapse}
        >
          <span className="text-indigo font-thin text-xl">{props.title}</span>
          <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
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
        <div
          className={`text-grey-darkest ease-in-out delay-75 transition duration-300 overflow-hidden ${
            isCollapse ? "h-auto" : "h-0 "
          }`}
        >
          {props.children}
        </div>
    </div>
  );
};

export { Accordeon };
