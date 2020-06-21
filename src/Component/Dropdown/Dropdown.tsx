import { Match, Link } from "@reach/router";
import React from "react";

interface LinkProps {
  href: string;
  libelle: string;
}
interface DropDownProps {
  links: LinkProps[];
  title: string;
}
const DropDown = (props: DropDownProps) => (
  <div className="relative inline-block dropdown">
    <button className="block w-full mt-4 mr-4 text-gray-600 lg:inline-block lg:mt-0 hover:text-white">
      <span>{props.title}</span>
    </button>
    <ul className="absolute z-30 hidden w-64 p-4 pt-1 text-gray-700 bg-blue-800 rounded dropdown-content">
      {props.links.map((link, index: number) => (
        <Match path={link.href} key={index}>
          {(match) => (
            <Link
              to={link.href}
              className={`block w-full mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 ${
                match.match ? "text-white" : "text-gray-600"
              }`}
            >
              {link.libelle}
            </Link>
          )}
        </Match>
      ))}
    </ul>
  </div>
);

export { DropDown };
