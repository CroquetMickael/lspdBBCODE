import React from "react";
import { InputComponent } from "@component/Input.component";
const OuvertureEnqueteAutreAccComponent = (props: any) => (
  <form className="w-full">
    <div className="flex flex-wrap justify-between w-full mb-6">
      <div className="w-full mx-4 my-2">Information sur le plaignant</div>
      <div className="flex flex-wrap w-full">
        <div className="ml-4">
          <InputComponent
            placeholder="Enquêteur en charge"
            type="text"
            border={true}
            onChange={(e: any) => props.setOfficierACharge(e.target.value)}
          />
        </div>
        <div className="w-1/6 ml-4">
          <InputComponent
            placeholder="Date supposée des faits (JJMMAAAA)"
            type="text"
            border={true}
            onChange={(e: any) => props.setDatePlainte(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Titre de l'enquête"
            type="text"
            border={true}
            onChange={(e: any) => props.setTitrePlainte(e.target.value)}
          />
        </div>
      </div>
    </div>
  </form>
);

export { OuvertureEnqueteAutreAccComponent };
