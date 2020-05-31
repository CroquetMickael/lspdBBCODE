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

const InterventionComponentAccComponent = (props: any) => (
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
        Information complémentaire
      </div>
      <div className="flex w-full">
        <div className="py-1 ml-4">
          <div className="mb-2">
            <label className="w-full">Type d'intervention</label>
          </div>
          <select
            className="py-2 shadow"
            onChange={(e: any) => props.setType(e.target.value)}
          >
            <option value="Retranchement">Retranchement</option>
            <option value="Prise d'otage">Prise d'otage</option>
            <option value="Kidnapping">Kidnapping</option>
            <option value="Tuerie de masse">Tuerie de masse</option>
            <option value="Action terroriste">Tuerie de masse</option>
          </select>
        </div>
        <div className="py-1 ml-4">
          <div className="mb-2">
            <label className="w-full">L'équipe tactique du Bureau Fédéral a été présente?</label>
          </div>
          <select
            className="py-2 shadow"
            onChange={(e: any) => props.setFBI(e.target.value)}
          >
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
          </select>
        </div>
        <div className="ml-4 mr-4">
          <InputComponent
            placeholder="Superviseur"
            type="text"
            border={true}
            onChange={(e: any) => props.setSuperviseur(e.target.value)}
          />
        </div>
        <div className="ml-4 mr-4">
          <InputComponent
            placeholder="Superviseur BCO"
            type="text"
            border={true}
            onChange={(e: any) => props.setSuperviseurBCO(e.target.value)}
          />
        </div>
        <div className="ml-4 mr-4">
          <InputComponent
            placeholder="Lieu et secteur"
            type="text"
            border={true}
            onChange={(e: any) => props.setLieu(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full mx-4 mb-2">
        Bilan humain et matériel:(précisez le nombre)
      </div>
      <div className="flex w-full">
      <div className="ml-4 mr-4">
          <InputComponent
            placeholder="Suspect(s) interpellé(s)"
            type="text"
            border={true}
            onChange={(e: any) => props.setSuspectVivant(e.target.value)}
          />
        </div>
        <div className="ml-4 mr-4">
          <InputComponent
            placeholder="Suspect(s) abattu(s) par le SWAT"
            type="text"
            border={true}
            onChange={(e: any) => props.setSuspectAbattut(e.target.value)}
          />
        </div>
        <div className="ml-4 mr-4">
          <InputComponent
            placeholder="Suspect(s) suicidé(s)"
            type="text"
            border={true}
            onChange={(e: any) => props.setSuspectSuicide(e.target.value)}
          />
        </div>
        <div className="ml-4 mr-4">
          <InputComponent
            placeholder="Otage(s) libéré(s) sans blessure grave"
            type="text"
            border={true}
            onChange={(e: any) => props.setOtage(e.target.value)}
          />
        </div>
        <div className="ml-4 mr-4">
          <InputComponent
            placeholder="Otage(s) libéré(s) avec blessure grave"
            type="text"
            border={true}
            onChange={(e: any) => props.setOtageGrave(e.target.value)}
          />
        </div>
        <div className="ml-4 mr-4">
          <InputComponent
            placeholder="Otage(s) décédé(s) "
            type="text"
            border={true}
            onChange={(e: any) => props.setOtageDecede(e.target.value)}
          />
        </div>
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

export { InterventionComponentAccComponent };
