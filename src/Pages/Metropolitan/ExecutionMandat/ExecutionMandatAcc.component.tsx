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

const ExecutionMandatComponentAccComponent = (props: any) => (
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
      <div className="ml-4">
        <InputComponent
          placeholder="Véhicule"
          type="text"
          border={true}
          onChange={(e: any) => props.setVehicle(e.target.value)}
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
      <div className="ml-4 mr-4">
        <InputComponent
          placeholder="Heure début"
          type="text"
          border={true}
          onChange={(e: any) => props.setHeureDebut(e.target.value)}
        />
      </div>
      <div className="ml-4 mr-4">
        <InputComponent
          placeholder="Heure Fin"
          type="text"
          border={true}
          onChange={(e: any) => props.setHeureFin(e.target.value)}
        />
      </div>
      <div className="w-full mx-4 my-2">
        Bilan humain et matériel:(précisez le nombre)
      </div>
      <div className="flex w-full">
        <div className="py-1 ml-4">
          <div className="mb-2">
            <label className="w-full">Uniforme</label>
          </div>
          <select
            className="py-2 shadow"
            onChange={(e: any) => props.setUniforme(e.target.value)}
          >
            <option value="Civil">Civil</option>
            <option value="Tenue tactique légère">Tenue tactique légère</option>
            <option value="Tenue tactique lourde">Tenue tactique lourde</option>
          </select>
        </div>
      </div>
      <div className="w-full mx-4 mb-2">
        Bilan humain et matériel:(précisez le nombre)
      </div>
      <div className="flex w-full">
        <div className="ml-4 mr-4">
          <InputComponent
            placeholder="Opérateur(s) blessé(s)"
            type="text"
            border={true}
            onChange={(e: any) => props.setOperateurBlesse(e.target.value)}
          />
        </div>
        <div className="ml-4 mr-4">
          <InputComponent
            placeholder="Opérateur(s) décédé(s)"
            type="text"
            border={true}
            onChange={(e: any) => props.setOperateurDecede(e.target.value)}
          />
        </div>
        <div className="ml-4 mr-4">
          <InputComponent
            placeholder="Victime(s) civile(s)"
            type="text"
            border={true}
            onChange={(e: any) => props.setVictimeCivil(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full m-4">
        <p>Équipement endommagé</p>
        <textarea
          className="w-full h-32 shadow"
          onChange={(e: any) => props.setEquipement(e.target.value)}
        ></textarea>
      </div>
      <div className="w-full m-4">
        <p>Bâtiment(s) ou bien(s) détruit(s), dégradé(s)</p>
        <textarea
          className="w-full h-32 shadow"
          onChange={(e: any) => props.setBatiment(e.target.value)}
        ></textarea>
      </div>
      <div className="w-full m-4">
        Opérateurs présents
        <textarea
          className="w-full h-32 shadow"
          onChange={(e: any) => props.setOperators(e.target.value)}
        />
      </div>
    </div>
  </form>
);

export { ExecutionMandatComponentAccComponent };
