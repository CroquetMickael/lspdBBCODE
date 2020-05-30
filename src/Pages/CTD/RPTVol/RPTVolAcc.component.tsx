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

const RPTVolAccComponent = (props: any) => (
  <form className="w-full">
    <div className="flex flex-wrap justify-between w-full mb-6">
      <div className="ml-4">
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
      <div className="py-1 ml-4">
        <select className="py-2 shadow" onChange={(e: any) => props.setType(e.target.value)}>
          <option value="ASTRO">ASTRO</option>
          <option value="VT">VT</option>
          <option value="ENTRAINEMENT">ENTRAINEMENT</option>
        </select>
      </div>
      <div className="ml-4">
        <InputComponent
          placeholder="Etat de l'appareil"
          type="text"
          border={true}
          onChange={(e: any) => props.setEtat(e.target.value)}
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
  </form>
);

export { RPTVolAccComponent };
