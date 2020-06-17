import React from "react";
const CSSEnqueteAccComponent = (props: any) => (
  <form className="w-full">
    <div className="flex flex-wrap justify-between w-full mb-6">
      <div className="w-full mx-4 my-2">Information sur le plaignant</div>
      <div className="flex flex-wrap w-full">
        <div className="my-2">
          Laisser AVEC, ou bien remplacer par SANS suivi du motif qui justifie
          que l'enquête ne soit pas publiée
        </div>
        <textarea
          className="w-full h-32 p-2 mb-2 shadow"
          value={props.publication}
          onChange={(e) => props.setPublication(e.target.value)}
        ></textarea>
        <div className="my-2">
          Laisser "CSS" pour classement sans suite ou mettre "résolue", en bref
          mettez le résultat et expliquez
        </div>
        <textarea
          className="w-full h-32 p-2 mb-2 shadow"
          value={props.issue}
          onChange={(e) => props.setIssue(e.target.value)}
        ></textarea>
      </div>
    </div>
  </form>
);

export { CSSEnqueteAccComponent };
