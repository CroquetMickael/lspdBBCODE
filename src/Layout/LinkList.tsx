import React from "react";
import { Match, Link } from "@reach/router";

const links = [
  {
    href: "/",
    libelle: "Rapport Patrouille",
  },
  {
    href: "/VolSOB",
    libelle: "Rapport de vol SOB",
  },
  {
    href: "/PATINDIA",
    libelle: "Rapport Patrouille India",
  },
  {
    href: "/detention",
    libelle: "Enregistrement en détention",
  }
];

const LinkList = () => (
  <>
    {links.map((link, index: number) => (
      <Match path={link.href} key={index}>
        {(match) => (
          <Link
            to={link.href}
            className={`block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 ${
              match.match ? "text-white" : "text-gray-600"
            }`}
          >
            {link.libelle}
          </Link>
        )}
      </Match>
    ))}
  </>
);

export { LinkList };
