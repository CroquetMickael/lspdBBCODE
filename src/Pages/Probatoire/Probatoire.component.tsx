import React, { useState, useContext, useEffect } from "react";
import { Accordeon } from "../../Component/Accordeon";
import { EditorState } from "draft-js";
import { HtmlEditor } from "../../Component/Editor/Editor.component";
import { ModalContext } from "../../Component/Context/ModalContext";
import { GenerateButtonComponent } from "../../Component/GenerateButton/GenerateButton.container";
import { UserContext } from "../../Component/Context/UserContext";
import { ProbatoireAccComponent } from "./ProbatoireAcc.component";
import { PageLayout } from "../../Layout/PageLayout";

const ProbatoireComponent = (props: any) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);

  //IC
  const [probatoire, setProbatoire] = useState<string>("");
  const [comRadio, setComRadio] = useState<string>("NONE");
  const [conProc, setConProc] = useState<string>("NONE");
  const [comportement, setComportement] = useState<string>("NONE");
  const [conduite, setConduite] = useState<string>("NONE");
  const [AvisG, setAvisG] = useState<string>("NONE");
  const [incident, setIncident] = useState<String>("");
  const [grade, setGrade] = useState<string>("");

  //OOC
  const [expresOOC, setExpresOOC] = useState<string>("NONE");
  const [emotionOOC, setEmotionOOC] = useState<string>("NONE");
  const [evolutionOOC, setEvolutionOOC] = useState<string>("NONE");
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
    grade,
    evolutionOOC,
    setEvolutionOOC,
    setGrade,
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
          <ProbatoireAccComponent {...propsToSend} />
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

export { ProbatoireComponent };
