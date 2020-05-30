import React from "react";
import { InputComponent } from "@component/Input.component"

interface RPTPatrouilleProps {
  Officers: string;
  Date: string;
  Type: string;
  setOfficers: () => void;
  setDate: () => void;
  setType: () => void;
}

const RPTPatrouilleIndiaAccComponent = (props: any) => (
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
          placeholder="Véhicule"
          type="text"
          border={true}
          onChange={(e: any) => props.setVehicle(e.target.value)}
        />
      </div>
      <div className="ml-4">
        <InputComponent
          placeholder="Opérateurs présents"
          type="text"
          border={true}
          onChange={(e: any) => props.setOperators(e.target.value)}
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
      <div className="ml-4 mr-4">
        <InputComponent
          placeholder="Heure début"
          type="text"
          border={true}
          onChange={(e: any) => props.setHeureDebut(e.target.value)}
        />
      </div>
      <div className="ml-4 mr-4">
        <InputComponent
          placeholder="Heure Fin"
          type="text"
          border={true}
          onChange={(e: any) => props.setHeureFin(e.target.value)}
        />
      </div>
    </div>
  </form>
);

export { RPTPatrouilleIndiaAccComponent };
