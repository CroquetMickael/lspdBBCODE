import React from "react";
import { generate } from "./GenerateRapport";
import draftToHtml from "draftjs-to-html";
import { convertToRaw } from "draft-js";

const GenerateButtonComponent = (props: any) => {
  const GenerateElement = () => {
    if (
      props.rapportType === "DET" ||
      props.rapportType === "MEA" ||
      props.rapportType === "PLAINTEDO" ||
      props.rapportType === "PLAINTE" ||
      "RECLAAUXI"
    ) {
      generate(props.rapportType, props, props.code, props.setBBCode);
      props.toggleModal();
    } else {
      const code = draftToHtml(convertToRaw(props.code.getCurrentContent()));
      generate(props.rapportType, props, code, props.setBBCode);
      props.toggleModal();
    }
  };
  return (
    <button
      className="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent"
      onClick={() => GenerateElement()}
    >
      Générer
    </button>
  );
};

export { GenerateButtonComponent };
