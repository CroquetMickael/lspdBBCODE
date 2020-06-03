import React from "react";
import { InputComponent } from "@component/Input.component";
import { ToggleButtonComponent } from "@component/ToggleButton.component";

const MEAAccComponent = (props: any) => (
  <form className="w-full">
    <div className="flex flex-wrap justify-between w-full mb-6">
      <div className="w-full mx-4 mb-2">Information sur l'officier</div>
      <div className="flex w-full">
        <div className="mb-4 ml-4">
          <InputComponent
            placeholder="Nom"
            type="text"
            border={true}
            value={props.firstName}
            onChange={(e: any) => props.setFirstName(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Prénom"
            type="text"
            border={true}
            value={props.lastName}
            onChange={(e: any) => props.setLastName(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Signature du rapport"
            type="text"
            border={true}
            value={props.signature}
            onChange={(e: any) => props.setSignature(e.target.value)}
          />
        </div>
        <div className="ml-4 mr-4">
          <InputComponent
            placeholder="Date des faits"
            type="text"
            border={true}
            value={props.dateFait}
            onChange={(e: any) => props.setDateFait(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full mx-4 mb-2">Information complémentaire</div>
      <div className="flex w-full">
        <div className="ml-4">
          <InputComponent
            placeholder="Identité du suspect"
            type="text"
            border={true}
            onChange={(e: any) => props.setSuspectName(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Profession du suspect"
            type="text"
            border={true}
            onChange={(e: any) => props.setSuspectProfession(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Pseudo forum de la personne"
            type="text"
            border={true}
            onChange={(e: any) => props.setSuspectNameOOC(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <ToggleButtonComponent
            label="Suspect en liberte"
            setValue={props.setLiberte}
            value={props.liberte}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Lieu de résidence"
            type="text"
            border={true}
            onChange={(e: any) => props.setLieu(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full my-4">
        Le défendeur a-t-il bénéficié du régime de libération sous caution ? Si
        oui, pour quel montant et pour quelle(s) charge(s) :
        <textarea
          className="w-full h-32"
          onChange={(e: any) => props.setCaution(e.target.value)}
        />
      </div>
    </div>
  </form>
);

export { MEAAccComponent };
