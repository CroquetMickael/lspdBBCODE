import React from "react";
import { InputComponent } from "@component/Input.component";
const OuvertureEnqueteLRPAccComponent = (props: any) => (
  <form className="w-full">
    <div className="flex flex-wrap justify-between w-full mb-6">
      <div className="w-full mx-4 my-2">Information sur le plaignant</div>
      <div className="flex flex-wrap w-full">
        <div className="ml-4">
          <InputComponent
            placeholder="Officier a charge"
            type="text"
            border={true}
            onChange={(e: any) => props.setOfficierACharge(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Id de l'enquéte forum LRP"
            type="text"
            border={true}
            onChange={(e: any) => props.setIdPlainte(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Titre de la plainte"
            type="text"
            border={true}
            onChange={(e: any) => props.setTitrePlainte(e.target.value)}
          />
        </div>
      </div>
    </div>
  </form>
);

export { OuvertureEnqueteLRPAccComponent };
