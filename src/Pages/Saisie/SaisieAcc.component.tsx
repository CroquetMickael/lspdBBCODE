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

const SaisieAccComponent = (props: any) => (
  <form className="w-full">
    <div className="flex flex-wrap justify-between w-full mb-6">
      <div className="flex w-full mb-4">
        <div className="ml-4">
          <InputComponent
            placeholder="Identité suspect"
            type="text"
            border={true}
            onChange={(e: any) => props.setSuspectName(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full mb-2 ml-4">Saisie de drogue</div>
      <div className="flex flex-wrap w-full">
        <div className="mb-4 ml-4">
          <InputComponent
            placeholder="MÉTHAMPHÉTAMINE"
            type="text"
            border={true}
            onChange={(e: any) => props.setMeth(e.target.value)}
          />
        </div>
        <div className="mb-4 ml-4">
          <InputComponent
            placeholder="COCAÏNE"
            type="text"
            border={true}
            onChange={(e: any) => props.setCoc(e.target.value)}
          />
        </div>
        <div className="mb-4 ml-4">
          <InputComponent
            placeholder="CANNABIS"
            type="text"
            border={true}
            onChange={(e: any) => props.setCann(e.target.value)}
          />
        </div>
        <div className="mb-4 ml-4">
          <InputComponent
            placeholder="STÉROÏDE"
            type="text"
            border={true}
            onChange={(e: any) => props.setStero(e.target.value)}
          />
        </div>
        <div className="mb-4 ml-4">
          <InputComponent
            placeholder="HÉROÏNE"
            type="text"
            border={true}
            onChange={(e: any) => props.setHero(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full mb-2 ml-4">Saisie d'arme</div>
      <div className="flex w-full">
        <div className="mb-4 ml-4">
          <InputComponent
            placeholder="9MM"
            type="text"
            border={true}
            onChange={(e: any) => props.setMM(e.target.value)}
          />
        </div>
        <div className="mb-4 ml-4">
          <InputComponent
            placeholder="9MM Silencieux"
            type="text"
            border={true}
            onChange={(e: any) => props.setMMS(e.target.value)}
          />
        </div>
        <div className="mb-4 ml-4">
          <InputComponent
            placeholder="Desert Eagle"
            type="text"
            border={true}
            onChange={(e: any) => props.setDE(e.target.value)}
          />
        </div>
        <div className="mb-4 ml-4">
          <InputComponent
            placeholder="Fusil à pompe"
            type="text"
            border={true}
            onChange={(e: any) => props.setPompe(e.target.value)}
          />
        </div>
        <div className="mb-4 ml-4">
          <InputComponent
            placeholder="Micro SMG/Uzi"
            type="text"
            border={true}
            onChange={(e: any) => props.setUzi(e.target.value)}
          />
        </div>
        <div className="mb-4 ml-4">
          <InputComponent
            placeholder="MP5"
            type="text"
            border={true}
            onChange={(e: any) => props.setMP5(e.target.value)}
          />
        </div>
        <div className="mb-4 ml-4">
          <InputComponent
            placeholder="AK-47"
            type="text"
            border={true}
            onChange={(e: any) => props.setAk(e.target.value)}
          />
        </div>
        <div className="mb-4 ml-4">
          <InputComponent
            placeholder="M4"
            type="text"
            border={true}
            onChange={(e: any) => props.setM4(e.target.value)}
          />
        </div>
        <div className="mb-4 ml-4">
          <InputComponent
            placeholder="Tec-9"
            type="text"
            border={true}
            onChange={(e: any) => props.setTec9(e.target.value)}
          />
        </div>
        <div className="mb-4 ml-4">
          <InputComponent
            placeholder="Country Rifle"
            type="text"
            border={true}
            onChange={(e: any) => props.setRifle(e.target.value)}
          />
        </div>
        <div className="mb-4 ml-4">
          <InputComponent
            placeholder="Sniper Rifle"
            type="text"
            border={true}
            onChange={(e: any) => props.setSRifle(e.target.value)}
          />
        </div>
        <div className="mb-4 ml-4">
          <InputComponent
            placeholder="RPG"
            type="text"
            border={true}
            onChange={(e: any) => props.setRpg(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full mb-2 ml-4">LOGS (OOC)</div>
      <div className="flex w-full mb-4">
        <div className="w-full ml-4 ">
         <textarea className="w-full shadow " onChange={(e: any) => props.setLog(e.target.value)}></textarea>
        </div>
      </div>
    </div>
  </form>
);

export { SaisieAccComponent };
