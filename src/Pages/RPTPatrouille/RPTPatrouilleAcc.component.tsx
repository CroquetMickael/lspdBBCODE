import React from "react";
import { InputComponent } from "../../Component/Input.component"

interface RPTPatrouilleProps {
  Officers: string;
  Date: string;
  Type: string;
  setOfficers: () => void;
  setDate: () => void;
  setType: () => void;
}

const RPTPatrouilleAccComponent = (props: any) => (
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
      <div className="ml-4 py-1">
        <select className="shadow py-2" onChange={(e: any) => props.setType(e.target.value)}>
          <option value="Incident">Incident</option>
          <option value="Rapport de patrouille">Rapport de patrouille</option>
        </select>
      </div>
      <div className="ml-4">
        <InputComponent
          placeholder="Officiers Présent"
          type="text"
          border={true}
          onChange={(e: any) => props.setOfficers(e.target.value)}
        />
      </div>
      <div className="ml-4 mr-4">
        <InputComponent
          placeholder="Date"
          type="text"
          border={true}
          onChange={(e: any) => props.setDate(e.target.value)}
        />
      </div>
    </div>
  </form>
);

export { RPTPatrouilleAccComponent };
