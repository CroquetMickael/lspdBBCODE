import React, { useState, useContext, useEffect } from "react";
import { Accordeon } from "@component/Accordeon";
import { EditorState } from "draft-js";
import { HtmlEditor } from "@component/Editor/Editor.component";
import { ModalContext } from "@component/Context/ModalContext";
import { GenerateButtonComponent } from "@component/GenerateButton/GenerateButton.container";
import { UserContext } from "@component/Context/UserContext";
import { EvaluationAccComponent } from "./EvaluationAcccomponent";
import { PageLayout } from "../../../Layout/PageLayout";

const EvaluationComponent = (props: any) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);

  //IC
  const [probatoire, setProbatoire] = useState<string>("");
  const [comRadio, setComRadio] = useState<string>("XGOOD");
  const [conProc, setConProc] = useState<string>("XGOOD");
  const [comportement, setComportement] = useState<string>("XGOOD");
  const [conduite, setConduite] = useState<string>("XGOOD");
  const [AvisG, setAvisG] = useState<string>("XGOOD");
  const [incident, setIncident] = useState<String>("");

  //OOC
  const [expresOOC, setExpresOOC] = useState<string>("XGOOD");
  const [emotionOOC, setEmotionOOC] = useState<string>("XGOOD");
  const [evolutionOOC, setEvolutionOOC] = useState<string>("XGOOD");
  const [remarqueOOC, setRemarqueOOC] = useState<string>("");

  const propsToSend = {
    probatoire,
    setProbatoire,
    code: editorState,
    toggleModal: ModalValues.toggleModal,
    date: userValues.currentDate,
    setDate: userValues.setCurrentDate,
    comRadio,
    setComRadio,
    conProc,
    setConProc,
    comportement,
    setComportement,
    conduite,
    setConduite,
    expresOOC,
    setExpresOOC,
    emotionOOC,
    setEmotionOOC,
    remarqueOOC,
    setRemarqueOOC,
    AvisG,
    setAvisG,
    grade: userValues.grade,
    setGrade: userValues.setGrade,
    evolutionOOC,
    setEvolutionOOC,
    incident,
    setIncident,
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
      "https://lspd-online.forumactif.com/f43-carnets-de-probation"
    );
  });

  return (
    <PageLayout>
      <div className="w-full">
        <Accordeon title="Information">
          <EvaluationAccComponent {...propsToSend} />
        </Accordeon>
      </div>
      <div className="flex flex-col w-full h-full">
        <div className="w-full my-4">Commentaire IC : </div>
        <HtmlEditor editorState={editorState} setEditorState={setEditorState} />
      </div>
      <GenerateButtonComponent rapportType="PROB" {...propsToSend} />
    </PageLayout>
  );
};

export { EvaluationComponent };
