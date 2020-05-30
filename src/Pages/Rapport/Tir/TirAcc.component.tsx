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

const TirAccComponent = (props: any) => (
  <form className="w-full">
    <div className="flex flex-wrap justify-between w-full mb-6">
      <div className="w-full mb-2 ml-4">Information personnel</div>
      <div className="flex w-full">
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
            placeholder="Rang et affectation"
            type="text"
            border={true}
            onChange={(e: any) => props.setRangAffec(e.target.value)}
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
      </div>
      <div className="w-full mb-2 ml-4">
        Information sur les personnes présente
      </div>
      <div className="flex w-full">
        <div className="ml-4">
          <InputComponent
            placeholder="Superviseur"
            type="text"
            border={true}
            onChange={(e: any) => props.setSuperviseur(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Officier en charge"
            type="text"
            border={true}
            onChange={(e: any) => props.setOfficierCharge(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Témoins"
            type="text"
            border={true}
            onChange={(e: any) => props.setTemoin(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Suspects"
            type="text"
            border={true}
            onChange={(e: any) => props.setSuspectName(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full mb-2 ml-4">Information sur l'arme</div>
      <div className="flex w-full">
        <div className="ml-4">
          <InputComponent
            placeholder="Arme utilisée"
            type="text"
            border={true}
            onChange={(e: any) => props.setArme(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Nombre de munitions"
            type="text"
            border={true}
            onChange={(e: any) => props.setMunition(e.target.value)}
          />
        </div>

        <div className="ml-4">
          <InputComponent
            placeholder="Date et heure de l'usage"
            type="text"
            border={true}
            onChange={(e: any) => props.setDateHeure(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Motif du tir"
            type="text"
            border={true}
            onChange={(e: any) => props.setMotif(e.target.value)}
          />
        </div>
        <div className="py-1 ml-4">
          <select
            className="py-2 shadow"
            onChange={(e: any) => props.setType(e.target.value)}
          >
            <option value="DEC">Décédé</option>
            <option value="GRAVE">Blessures graves</option>
            <option value="SUPP">Blessures superficielles</option>
            <option value="NONE">Aucune blessure</option>
          </select>
        </div>
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

export { TirAccComponent };
