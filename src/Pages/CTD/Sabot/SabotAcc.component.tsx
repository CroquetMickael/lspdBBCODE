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

const SabotAccComponent = (props: any) => (
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
            placeholder="Assignation (Bureau)"
            type="text"
            border={true}
            onChange={(e: any) => props.setAffectation(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full mx-4 mb-2">Information sur le véhicule</div>
      <div className="flex w-full">
        <div className="ml-4">
          <InputComponent
            placeholder="Modèle du véhicule"
            type="text"
            border={true}
            onChange={(e: any) => props.setModeleVeh(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Plaque du véhicule"
            type="text"
            border={true}
            onChange={(e: any) => props.setPlaqueVeh(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Propriétaire"
            type="text"
            border={true}
            onChange={(e: any) => props.setProprio(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Lien de la photo"
            type="text"
            border={true}
            onChange={(e: any) => props.setPhotoLink(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full mx-4 mb-2">Informations Supplémentaires</div>
      <div className="flex w-full">
        <div className="ml-4">
          <InputComponent
            placeholder="Raison du placement"
            type="text"
            border={true}
            onChange={(e: any) => props.setRaison(e.target.value)}
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
    </div>
  </form>
);

export { SabotAccComponent };
