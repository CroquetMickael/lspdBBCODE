import React from "react";
import { DropDown } from "@component/Dropdown/Dropdown";

const links = {
  CTD: [
    {
      href: "/DeploiementCTD",
      libelle: "Deploiement CTD",
    },
    {
      href: "/ContraventionCTD",
      libelle: "Rapport contravention CTD",
    },
    {
      href: "/Sabot",
      libelle: "Placement de Sabot",
    },
    {
      href: "/Fourriere",
      libelle: "Placement en fourriere",
    },
  ],
  Justice: [
    {
      href: "/Mandat",
      libelle: "Demande de mandat",
    },
    {
      href: "/mea",
      libelle: "Mise en accusation",
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
    },
  ],
  Metropolitan: [
    {
      href: "/rapportPatrouilleIndia",
      libelle: "Rapport assistance aux patrouilles",
    },
    {
      href: "/ExecutionMandat",
      libelle: "Rapport d'exécution de mandat",
    },
    {
      href: "/Intervention",
      libelle: "Rapport d'intervention tactique",
    },
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
  ],
  Autre: [
    {
      href: "/email",
      libelle: "Email interne",
    },
  ],
  Plainte: [
    {
      href: "/plainteAR",
      libelle: "Accuser de réception",
    },
    {
      href: "/plainteAI",
      libelle: "Transmission aux AI",
    },
    {
      href: "/plainteCharge",
      libelle: "Prise en charge",
    },
    {
      href: "/plainteVierge",
      libelle: "Courrier vierge",
    },
    {
      href: "/plainteCSS",
      libelle: "Classement sans suite",
    },
    {
      href: "/plainteRCI",
      libelle: "Affaire résolue CI (suspect /juger)",
    },
    {
      href: "/plainteMEA",
      libelle: "Affaire résolue MEA",
    },
    {
      href: "/plaintedo",
      libelle: "Enquête /DO",
    },
  ],
};

const LinkList = () => (
  <>
    <DropDown links={links.CTD} title="Rapport CTD" />
    <DropDown links={links.Probatoire} title="Rapport pour les probatoires" />
    <DropDown links={links.Rapport} title="Rapport Officier" />
    <DropDown links={links.Metropolitan} title="Rapport de la metropolitan" />
    <DropDown links={links.Justice} title="Rapport justice" />
    <DropDown links={links.Plainte} title="Plainte (Forum LRP)" />
    <DropDown links={links.Autre} title="Autre" />
  </>
);

export { LinkList };
