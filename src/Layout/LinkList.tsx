import React from "react";
import { Match, Link } from "@reach/router";

const links = [
  {
    href: "/",
    libelle: "Rapport de patrouille",
  },
  {
    href: "/rapportVolSOB",
    libelle: "Rapport de vol SOB",
  },
  {
    href: "/rapportPatrouilleIndia",
    libelle: "Rapport de patrouille INDIA",
  },
  {
    href: "/EnregistrementDetention",
    libelle: "Enregistrement en détention",
  },
  {
    href: "/Saisie",
    libelle: "Rapport de saisie",
  },
  {
    href: "/Tir",
    libelle: "Rapport de tir en service",
  },
  {
    href: "/Sabot",
    libelle: "Placement de Sabot",
  },
  {
    href: "/Fourriere",
    libelle: "Placement en fourriere",
  },
  {
    href: "/Probatoire",
    libelle: "Evaluation probatoire ",
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
