import React, { useState, useContext, useEffect } from "react";
import { Accordeon } from "@component/Accordeon";
import { EditorState, ContentState } from "draft-js";
import { HtmlEditor } from "@component/Editor/Editor.component";
import { ModalContext } from "@component/Context/ModalContext";
import { GenerateButtonComponent } from "@component/GenerateButton/GenerateButton.container";
import { UserContext } from "@component/Context/UserContext";
import { InterventionComponentAccComponent } from "./InterventionAcc.component";
import { PageLayout } from "../../../Layout/PageLayout";

const InterventionComponent = (props: any) => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(``))
  );
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);

  const [Operators, setOperators] = useState<string>("");
  const [superviseur, setSuperviseur] = useState<string>("");
  const [heureDebut, setHeureDebut] = useState<string>("");
  const [heureFin, setHeureFin] = useState<string>("");
  const [Vehicle, setVehicle] = useState<string>("");
  const [intervention, setIntervention] = useState<string>("Retranchement");
  const [superviseurBCO, setSuperviseurBCO] = useState<string>("");
  const [FBI, setFBI] = useState<string>("Oui");
  const [lieu, setLieu] = useState<string>("");

  const [operateurBlesse, setOperateurBlesse] = useState<string>("");
  const [operateurDecede, setOperateurDecede] = useState<string>("");
  const [victimeCivil, setVictimeCivil] = useState<string>("");
  const [otage, setOtage] = useState<string>("");
  const [otageGrave, setOtageGrave] = useState<string>("");
  const [otageDecede, setOtageDecede] = useState<string>("");
  const [suspectVivant, setSuspectVivant] = useState<string>("");
  const [suspectAbattut, setSuspectAbattut] = useState<string>("");
  const [suspectSuicide, setSuspectSuicide] = useState<string>("");
  const [equipement, setEquipement] = useState<string>("");
  const [batiment, setBatiment] = useState<string>("");
  const [saisie, setSaisie] = useState<string>("");

  const propsToSend = {
    Operators,
    setOperators,
    code: editorState,
    toggleModal: ModalValues.toggleModal,
    date: userValues.currentDate,
    setDate: userValues.setCurrentDate,
    Vehicle,
    setVehicle,
    suspectVivant, setSuspectVivant,
    suspectAbattut, setSuspectAbattut,
    suspectSuicide, setSuspectSuicide,
    FBI,
    setFBI,
    otage,
    setOtage,
    otageGrave,
    setOtageGrave,
    otageDecede,
    setOtageDecede,
    superviseur,
    setSuperviseur,
    operateurBlesse,
    superviseurBCO,
    setSuperviseurBCO,
    setOperateurBlesse,
    operateurDecede,
    setOperateurDecede,
    batiment,
    setBatiment,
    saisie,
    setSaisie,
    heureDebut,
    equipement,
    setEquipement,
    victimeCivil,
    setVictimeCivil,
    heureFin,
    setHeureFin,
    lieu,
    setLieu,
    setHeureDebut,
    intervention,
    setIntervention,
    bbCode: ModalValues.bbCode,
    setBBCode: ModalValues.setBBCode,
    setFirstName: userValues.setFirstName,
    setLastName: userValues.setLastName,
    firstName: userValues.firstName,
    lastName: userValues.lastName,
    signature: userValues.signature,
    setSignature: userValues.setSignature,
    setTitlePost: ModalValues.setTitlePost,
  };

  useEffect(() => {
    ModalValues.setShow(true);
    ModalValues.setLink(
      "https://lspd-online.forumactif.com/f83-section-des-operateurs"
    );
  });

  return (
    <PageLayout>
      <Accordeon title="Information">
        <InterventionComponentAccComponent {...propsToSend} />
      </Accordeon>
      <div className="flex flex-col w-full h-full">
        <div className="w-full my-4">Saisie effectuée:</div>
        <textarea
          className="h-64 border border-black resize-none"
          onChange={(e: any) => setSaisie(e.target.value)}
        />
        <div className="w-full my-4">Résumé de l'intervention:</div>
        <HtmlEditor editorState={editorState} setEditorState={setEditorState} />
      </div>
      <GenerateButtonComponent rapportType="METROINTER" {...propsToSend} />
    </PageLayout>
  );
};

export { InterventionComponent };
