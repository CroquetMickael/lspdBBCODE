import React from "react";
import { InputComponent } from "@component/Input.component";
import { ObjectPeine } from "Peine/peine";

const PeineComponent = (props: any) => (
    <div className="w-full">
      <InputComponent
        placeholder="Chercher la peine"
        type="text"
        border={true}
        value={props.search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          props.searching(e)
        }
      />
      <div className="relative">
        {props.resultSearch.length !== 0 && (
          <div className="absolute z-10 flex flex-col w-full h-64 overflow-y-auto bg-white shadow">
            {props.resultSearch.map((result: ObjectPeine, index: number) => {
              return (
                <div
                  key={index}
                  className="py-2 cursor-pointer hover:bg-gray-300"
                  onClick={() => props.SelectPeine(result)}
                >
                  {result.article} - {result.label}
                </div>
              );
            })}
          </div>
        )}
      </div>
      {props.peineSelected.length !== 0 && (
        <div className="w-full h-64 overflow-y-auto shadow">
          {props.peineSelected.map((result: ObjectPeine, index: number) => {
            return (
              <div key={index} className="py-2">
                <button
                  className="px-4 mx-2 font-semibold bg-transparent border rounded hover:border-red-500 hover:bg-red-500 hover:text-white hover:border-transparent"
                  onClick={() => props.RemovePeine(result, index)}
                >
                  X
                </button>
                {result.article} - {result.label} {result.tempsIC}{" "}
                {result.typeTempsIC} et {result.Amende}$ d'amende{" "}
              </div>
            );
          })}
        </div>
      )}
    </div>
);

export { PeineComponent };
