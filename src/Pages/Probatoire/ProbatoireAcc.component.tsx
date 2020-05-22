import React from "react";
import { InputComponent } from "../../Component/Input.component";

const ProbatoireAccComponent = (props: any) => (
  <form className="w-full">
    <div className="flex flex-wrap justify-between w-full mb-6">
      <div className="w-full mx-4 mb-2">Information sur l'officier</div>
      <div className="flex flex-wrap w-full">
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
            placeholder="Grade"
            type="text"
            border={true}
            value={props.signature}
            onChange={(e: any) => props.setGrade(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Date"
            type="text"
            border={true}
            value={props.date}
            onChange={(e: any) => props.setDate(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Nom du probatoire"
            type="text"
            border={true}
            onChange={(e: any) => props.setProbatoire(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full mx-4 my-2">Avis IC</div>
      <div className="flex flex-wrap w-full">
        <div className="py-1 ml-4">
          <div className="mb-2">
            <label className="w-full">Communication Radio</label>
          </div>
          <select
            className="py-2 shadow"
            onChange={(e: any) => props.setComRadio(e.target.value)}
          >
            <option value="XGOOD">
              S'exprime parfaitement en radio tout en étant clair, court et
              concis
            </option>
            <option value="GOOD">S'exprime bien en radio</option>
            <option value="MGOOD">S'exprime en radio avec difficultés</option>
            <option value="NGOOD">Communications radios non-acquises</option>
            <option value="NONE">Non-évalué</option>
          </select>
        </div>
        <div className="py-1 ml-4">
          <div className="mb-2">
            <label className="w-full">Connaissance sur les procédures</label>
          </div>
          <select
            className="py-2 shadow"
            onChange={(e: any) => props.setConProc(e.target.value)}
          >
            <option value="XGOOD">
              Les procédures ont été acquises et parfaitement utilisées durant
              la patrouille
            </option>
            <option value="GOOD">
              Les procédures ont été acquises mais mal utilisées
            </option>
            <option value="MGOOD">Les procédures sont à revoir</option>
            <option value="NGOOD">Aucune connaissance des procédures</option>
            <option value="NONE">Non-évalué</option>
          </select>
        </div>
        <div className="py-1 ml-4">
          <div className="mb-2">
            <label className="w-full">Comportement durant la patrouille</label>
          </div>
          <select
            className="py-2 shadow"
            onChange={(e: any) => props.setComportement(e.target.value)}
          >
            <option value="XGOOD">
              L'officier-probatoire est dynamique et il veut apprendre
            </option>
            <option value="NGOOD">
              L'officier-probatoire a un comportement neutre et passif
            </option>
            <option value="NONE">
              L'officier-probatoire a un comportement inacceptable
            </option>
          </select>
        </div>
        <div className="py-1 ml-4">
          <div className="mb-2">
            <label className="w-full">Conduite du véhicule</label>
          </div>
          <select
            className="py-2 shadow"
            onChange={(e: any) => props.setConduite(e.target.value)}
          >
            <option value="XGOOD">
              Conduite parfaite durant diverses situations
            </option>
            <option value="NGOOD">Conduite à revoir</option>
            <option value="NONE">Non-évalué</option>
          </select>
        </div>
        <div className="py-1 ml-4">
          <div className="mb-2">
            <label className="w-full">Avis général</label>
          </div>
          <select
            className="py-2 shadow"
            onChange={(e: any) => props.setAvisG(e.target.value)}
          >
            <option value="XGOOD">Positif</option>
            <option value="NGOOD">Négatif</option>
            <option value="NONE">Neutre</option>
          </select>
        </div>
      </div>
      <div className="w-full m-4">
        <p>Incident(s) produit(s) durant la patrouille</p>
        <textarea
          className="w-full h-32 shadow"
          onChange={(e: any) => props.setIncident(e.target.value)}
        ></textarea>
      </div>
      <div className="w-full mx-4 my-2">Avis OOC</div>
      <div className="flex flex-wrap w-full">
        <div className="py-1 ml-4">
          <div className="mb-2">
            <label className="w-full">Expressions du personnage</label>
          </div>
          <select
            className="py-2 shadow"
            onChange={(e: any) => props.setExpresOOC(e.target.value)}
          >
            <option value="XGOOD">
              Sait parfaitement animer une conversation
            </option>
            <option value="GOOD">
              Participe à une conversation sans pour autant l'animer
            </option>
            <option value="NGOOD">Reste passif, silencieux</option>
            <option value="NONE">Non-évalué</option>
          </select>
        </div>
        <div className="py-1 ml-4">
          <div className="mb-2">
            <label className="w-full">
              Emotions du personnage (/me, /do, /ame...)
            </label>
          </div>
          <select
            className="py-2 shadow"
            onChange={(e: any) => props.setEmotionOOC(e.target.value)}
          >
            <option value="XGOOD">
              Sait régulièrement mettre en avant les émotions de son personnage
            </option>
            <option value="GOOD">
              Sait parfois mettre en avant les émotions de son personnage (peut
              mieux faire)
            </option>
            <option value="MGOOD">
              Ne sait que très peu mettre en avant son personnage, ou pas de
              manière assez détaillée
            </option>
            <option value="NGOOD">Néant</option>
            <option value="NONE">Non-évalué</option>
          </select>
        </div>
        <div className="py-1 ml-4">
          <div className="mb-2">
            <label className="w-full">
              Évolution du personnage dans la période probatoire
            </label>
          </div>
          <select
            className="py-2 shadow"
            onChange={(e: any) => props.setEmotionOOC(e.target.value)}
          >
            <option value="XGOOD">Évolution en accord avec les attentes</option>
            <option value="GOOD">
              Évolution correcte, mais peut mieux faire
            </option>
            <option value="NGOOD">Évolution mal jouée</option>
            <option value="NONE">Non-évalué</option>
          </select>
        </div>
        <div className="w-full m-4">
          <p>Remarques OOC</p>
          <textarea
            className="w-full h-32 shadow"
            onChange={(e: any) => props.setRemarqueOOC(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  </form>
);

export { ProbatoireAccComponent };
