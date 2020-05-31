import React from "react";
import { Match, Link } from "@reach/router";

const links = {
  CTD: [
    {
      href: "/DeploiementCTD",
      libelle: "Deploiement CTD",
    },{
      href: "/ContraventionCTD",
      libelle: "Rapport contravention CTD",
    }, {
      href: "/Sabot",
      libelle: "Placement de Sabot",
    },
    {
      href: "/Fourriere",
      libelle: "Placement en fourriere",
    }],
  Justice : [
    {
      href: "/Mandat",
      libelle: "Demande de mandat",
    },
    {
      href: "/EnregistrementDetention",
      libelle: "Enregistrement en détention",
    },
  ],
  Probatoire: [
    {
      href: "/Probatoire",
      libelle: "Evaluation probatoire",
    },
   
    {
      href: "/AutoEvaluationProbatoire",
      libelle: "Auto-evaluation probatoire ",
    }
  ],
  Metropolitan: [
    {
      href: "/rapportPatrouilleIndia",
      libelle: "Rapport de patrouille INDIA",
    }
  ],
  Rapport: [
    {
      href: "/",
      libelle: "Rapport de patrouille",
    },
    
    {
      href: "/Saisie",
      libelle: "Rapport de saisie",
    },
    {
      href: "/Tir",
      libelle: "Rapport de tir en service",
    },
  ]
}

const LinkList = () => (
  <>
    <div className="relative z-20 inline-block dropdown">
      <button className="block w-full mt-4 mr-4 text-gray-600 lg:inline-block lg:mt-0 hover:text-white">
        <span>Rapport CTD</span>
      </button>
      <ul className="absolute z-20 hidden p-4 pt-1 text-gray-700 bg-blue-800 rounded dropdown-content">
      {links.CTD.map((link, index: number) => (
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
      </ul>
    </div>
    <div className="relative z-20 inline-block dropdown">
      <button className="block w-full mt-4 mr-4 text-gray-600 lg:inline-block lg:mt-0 hover:text-white">
        <span>Rapport pour les probatoires</span>
      </button>
      <ul className="absolute hidden p-4 pt-1 text-gray-700 bg-blue-800 rounded dropdown-content">
      {links.Probatoire.map((link, index: number) => (
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
      </ul>
    </div>
    <div className="relative z-20 inline-block dropdown">
      <button className="block w-full mt-4 mr-4 text-gray-600 lg:inline-block lg:mt-0 hover:text-white">
        <span>Rapport d'officier</span>
      </button>
      <ul className="absolute hidden p-4 pt-1 text-gray-700 bg-blue-800 rounded dropdown-content">
      {links.Rapport.map((link, index: number) => (
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
      </ul>
    </div>
    <div className="relative z-20 inline-block dropdown">
      <button className="block w-full mt-4 mr-4 text-gray-600 lg:inline-block lg:mt-0 hover:text-white">
        <span>Rapport de la metropolitan</span>
      </button>
      <ul className="absolute hidden p-4 pt-1 text-gray-700 bg-blue-800 rounded dropdown-content">
      {links.Metropolitan.map((link, index: number) => (
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
      </ul>
    </div>
    <div className="relative z-20 inline-block dropdown">
      <button className="block w-full mt-4 mr-4 text-gray-600 lg:inline-block lg:mt-0 hover:text-white">
        <span>Rapport justice</span>
      </button>
      <ul className="absolute hidden p-4 pt-1 text-gray-700 bg-blue-800 rounded dropdown-content">
      {links.Justice.map((link, index: number) => (
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
      </ul>
    </div>
  </>
);

export { LinkList };
