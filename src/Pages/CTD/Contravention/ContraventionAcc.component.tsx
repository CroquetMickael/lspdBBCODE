import React from "react";
import { InputComponent } from "@component/Input.component";

interface RPTPatrouilleProps {
  Officers: string;
  Date: string;
  Type: string;
  setOfficers: () => void;
  setDate: () => void;
  setType: () => void;
}

const ContraventionAccComponent = (props: any) => (
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
            placeholder="Grade"
            type="text"
            border={true}
            onChange={(e: any) => props.setGrade(e.target.value)}
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
            placeholder="Date"
            type="text"
            border={true}
            value={props.date}
            onChange={(e: any) => props.setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full mx-4 mb-2">Information sur la contravention</div>
      <div className="flex w-full">
        <div className="ml-4">
          <InputComponent
            placeholder="Personne amendé"
            type="text"
            border={true}
            onChange={(e: any) => props.setPersonne(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Contravention émise"
            type="text"
            border={true}
            onChange={(e: any) => props.setContravention(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Lieu"
            type="text"
            border={true}
            onChange={(e: any) => props.setLieu(e.target.value)}
          />
        </div>
      </div>
    </div>
  </form>
);

export { ContraventionAccComponent };
