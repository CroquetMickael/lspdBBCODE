import React from "react";
import { Match, Link } from "@reach/router";

const links = [
  {
    href: "/",
    libelle: "Rapport de patrouille",
  },
  {
    href: "/DeploiementCTD",
    libelle: "Deploiement CTD",
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
    libelle: "Evaluation probatoire",
  },
  {
    href: "/Mandat",
    libelle: "Demande de mandat",
  },
  {
    href: "/AutoEvaluationProbatoire",
    libelle: "Auto-evaluation probatoire",
  },
  {
    href: "/ContraventionCTD",
    libelle: "Rapport contravention CTD"
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
