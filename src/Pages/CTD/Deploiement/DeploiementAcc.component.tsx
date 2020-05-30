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

const DeploiementCTDAccComponent = (props: any) => (
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
        <div className="mb-2">
          <label className="w-full">Secteur</label>
        </div>
        <select
          className="py-2 shadow"
          onChange={(e: any) => props.setSecteur(e.target.value)}
        >
          <option value="1-2">1-2</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div className="py-1 ml-4">
        <div className="mb-2">
          <label className="w-full">UNITÉ DÉPLOYÉE</label>
        </div>
        <select
          className="py-2 shadow"
          onChange={(e: any) => props.setType(e.target.value)}
        >
          <option value="MARY">MARY</option>
          <option value="TOM">TOM</option>
          <option value="TOMS">TOM (sérigraphiée)</option>
          <option value="AIR">AIR</option>
        </select>
      </div>
      <div className="ml-4">
        <InputComponent
          placeholder="Heure début"
          type="text"
          border={true}
          onChange={(e: any) => props.setHeureDebut(e.target.value)}
        />
      </div>
      <div className="ml-4">
        <InputComponent
          placeholder="Heure fin"
          type="text"
          border={true}
          onChange={(e: any) => props.setHeureFin(e.target.value)}
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

export { DeploiementCTDAccComponent };
