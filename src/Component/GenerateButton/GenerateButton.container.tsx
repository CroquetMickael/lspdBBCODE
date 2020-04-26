import React from "react";
import { generate } from "./Rapport";
import draftToHtml from "draftjs-to-html";
import { convertToRaw } from "draft-js";

const GenerateButtonComponent = (props: any) => {
  const GenerateElement = () => {
    const code = draftToHtml(convertToRaw(props.code.getCurrentContent()));
    generate(props.rapportType, props, code, props.setBBCode);
    props.toggleModal();
  };
  return (
    <button
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      onClick={() => GenerateElement()}
    >
      Générer
    </button>
  );
};

export { GenerateButtonComponent };
