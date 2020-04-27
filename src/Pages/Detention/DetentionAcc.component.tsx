import React from "react";
import { InputComponent } from "../../Component/Input.component";
import { ToggleButtonComponent } from "../../Component/ToggleButton.component";

interface RPTPatrouilleProps {
  Officers: string;
  Date: string;
  Type: string;
  setOfficers: () => void;
  setDate: () => void;
  setType: () => void;
}

const DetentionAccComponent = (props: any) => (
  <form className="w-full">
    <div className="flex flex-wrap justify-between w-full mb-6">
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
      </div>
      <div className="w-full mx-4 mb-2">Identité et droit</div>
      <div className="flex w-full">
        <div className="ml-4">
          <InputComponent
            placeholder="Identité suspect"
            type="text"
            border={true}
            onChange={(e: any) => props.setSuspectName(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <ToggleButtonComponent
            label="Droit miranda cité"
            setValue={props.setMiranda}
            value={props.miranda}
          />
        </div>
      </div>
      <div className="w-full mx-4 mb-2">Assistance juridique</div>
      <div className="flex w-full">
        <div className="ml-4">
          <ToggleButtonComponent
            label="Conseiller juridique ?"
            setValue={props.setConseil}
            value={props.conseil}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Nom du conseillé"
            type="text"
            border={true}
            onChange={(e: any) => props.setConseilName(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Remarque"
            type="text"
            border={true}
            onChange={(e: any) => props.setRemarque(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full mx-4 mb-2">Contact</div>
      <div className="flex w-full">
        <div className="ml-4">
          <InputComponent
            placeholder="Numéro de la personne"
            type="text"
            border={true}
            onChange={(e: any) => props.setContactNumber(e.target.value)}
          />
        </div>
        <div className="py-1 ml-4">
          <select
            className="py-2 shadow"
            onChange={(e: any) => props.setNature(e.target.value)}
          >
            <option value="#">Aucun</option>
            <option value="JUR">Conseiller juridique</option>
            <option value="EMP">Employeur</option>
            <option value="PRO">Proche</option>
            <option value="AUT">Autre</option>
          </select>
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Personne (Si autre)"
            type="text"
            border={true}
            onChange={(e: any) => props.setContactPersonne(e.target.value)}
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
    </div>
  </form>
);

export { DetentionAccComponent };
