import React from "react";
import { InputComponent } from "@component/Input.component";
import { ToggleButtonComponent } from "@component/ToggleButton.component";

const PlainteAccComponent = (props: any) => (
  <form className="w-full">
    <div className="flex flex-wrap justify-between w-full mb-6">
      <div className="w-full mx-4 my-2">Information sur le plaignant</div>
      <div className="flex flex-wrap w-full">
        <div className="ml-4">
          <InputComponent
            placeholder="Nom"
            type="text"
            border={true}
            onChange={(e: any) => props.setVictimeName(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Prénom"
            type="text"
            border={true}
            onChange={(e: any) => props.setVictimeLastName(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Date de naissance"
            type="text"
            border={true}
            onChange={(e: any) => props.setVictimeNaiss(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Lieu de naissance"
            type="text"
            border={true}
            onChange={(e: any) => props.setVictimeLieuNaiss(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Lieu de résidence"
            type="text"
            border={true}
            onChange={(e: any) => props.setVictimeLieu(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Numéro de la victime"
            type="text"
            border={true}
            onChange={(e: any) => props.setVictimePhone(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Pseudo forum LRP du plaignant"
            type="text"
            border={true}
            onChange={(e: any) => props.setVictimeOOC(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full mx-4 my-2">Information sur le concerné</div>
      <div className="flex flex-wrap w-full">
        <div className="ml-4">
          <InputComponent
            placeholder="Nom"
            type="text"
            border={true}
            onChange={(e: any) => props.setSuspectName(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Prénom"
            type="text"
            border={true}
            onChange={(e: any) => props.setSuspectLastName(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Lieu de résidence"
            type="text"
            border={true}
            onChange={(e: any) => props.setSuspectLieu(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Numéro du concerné"
            type="text"
            border={true}
            onChange={(e: any) => props.setSuspectPhone(e.target.value)}
          />
        </div>
        <div className="w-full m-4">
          <p>Témoin</p>
          <textarea
            className="w-full h-32 shadow"
            onChange={(e: any) => props.setTemoin(e.target.value)}
          ></textarea>
        </div>
        <div className="w-1/2 ml-4">
          <ToggleButtonComponent
            label="Formulaire remplis par un auxiliaire"
            setValue={props.setAuxi}
            value={props.auxi}
          />
        </div>
      </div>
    </div>
  </form>
);

export { PlainteAccComponent };
