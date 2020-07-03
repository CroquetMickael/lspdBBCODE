import React from "react";
import { InputComponent } from "@component/Input.component";

const LetterAccComponent = (props: any) => (
  <form className="w-full">
    <div className="flex flex-wrap justify-between w-full mb-6">
      <div className="ml-4">
        <InputComponent
          placeholder="Signature de l'email"
          type="text"
          border={true}
          value={props.signature}
          onChange={(e: any) => props.setSignature(e.target.value)}
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

export { LetterAccComponent };
