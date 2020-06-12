import {
  generateContravention,
  generateDeploiementCTD,
  generateFourriere,
  generateSabot,
} from "./Rapport/CTDRapport";

import {
  generateFormDetention,
  generateMandat,
  generateMEA,
} from "./Rapport/JusticeRapport";
import {
  generateExecutionMandat,
  generateIntervention,
  generateRapportPatrouilleIndia,
} from "./Rapport/MetroRapport";
import {
  generateRapportPatrouille,
  generateSaisie,
  generateTir,
} from "./Rapport/OfficierRapport";
import {
  generateAutoEvaluation,
  generateProbatoire,
} from "./Rapport/ProbatoireRapport";
import { generateEmail } from "./Rapport/OtherRapport";
import {
  generatePlainteAR,
  generatePlainteAI,
  generatePlainteResoluCI,
  generatePlainteCSS,
  generatePlainteResoluMEA,
  generatePlainteVierge,
  generatePlainteDo,
  generatePlainteAffec,
} from "./Rapport/PlainteRapport";

export function generate(type, elements, code, setter) {
  elements.setTitlePost("");
  switch (type) {
    case "RAPT":
      generateRapportPatrouille(elements, code, setter);
      break;
    case "CTDDPL":
      generateDeploiementCTD(elements, code, setter);
      break;
    case "CONTRAV":
      generateContravention(elements, code, setter);
      break;
    case "RAPTINDIA":
      generateRapportPatrouilleIndia(elements, code, setter);
      break;
    case "DET":
      generateFormDetention(elements, code, setter);
      break;
    case "SAI":
      generateSaisie(elements, code, setter);
      break;
    case "TIR":
      generateTir(elements, code, setter);
      break;
    case "SABOT":
      generateSabot(elements, code, setter);
      break;
    case "FOUR":
      generateFourriere(elements, code, setter);
      break;
    case "PROB":
      generateProbatoire(elements, code, setter);
      break;
    case "MANDAT":
      generateMandat(elements, code, setter);
      break;
    case "EXECMANDAT":
      generateExecutionMandat(elements, code, setter);
      break;
    case "METROINTER":
      generateIntervention(elements, code, setter);
      break;
    case "PROBAUTO":
      generateAutoEvaluation(elements, code, setter);
      break;
    case "EMAIL":
      generateEmail(elements, code, setter);
      break;
    case "MEA":
      generateMEA(elements, code, setter);
      break;
    case "PLAINTEAR":
      generatePlainteAR(setter);
      break;
    case "PLAINTEAI":
      generatePlainteAI(setter);
      break;
    case "PLAINTEVIERGE":
      generatePlainteVierge(elements, code, setter);
      break;
    case "PLAINTERCI":
      generatePlainteResoluCI(setter);
      break;
    case "PLAINTERMEA":
      generatePlainteResoluMEA(elements, setter);
      break;
    case "PLAINTEDO":
      generatePlainteDo(code, setter);
      break;
    case "PLAINTECSS":
      generatePlainteCSS(elements, setter);
      break;
    case "PLAINTEAFFEC":
      generatePlainteAffec(elements, setter);
      break;
    default:
      break;
  }
}
