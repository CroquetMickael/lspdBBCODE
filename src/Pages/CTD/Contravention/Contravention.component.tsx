import React, { useState, useContext, useEffect } from "react";
import { Accordeon } from "@component/Accordeon";
import { EditorState } from "draft-js";
import { HtmlEditor } from "@component/Editor/Editor.component";
import { ModalContext } from "@component/Context/ModalContext";
import { GenerateButtonComponent } from "@component/GenerateButton/GenerateButton.container";
import { UserContext } from "@component/Context/UserContext";
import { ContraventionAccComponent } from "./ContraventionAcc.component";
import { PageLayout } from "../../../Layout/PageLayout";

const ContraventionComponent = (props: any) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);

  
  const [lieu, setLieu] = useState<string>("");
  const [personne, setPersonne] = useState<string>("");
  const [contravention, setContravention] = useState<string>("");

  const propsToSend = {
    code: editorState,
    toggleModal: ModalValues.toggleModal,
    date: userValues.currentDate,
    setDate: userValues.setCurrentDate,
    grade: userValues.grade,
    setGrade: userValues.setGrade,
    lieu,
    setLieu,
    personne,
    setPersonne,
    contravention,
    setContravention,
    bbCode: ModalValues.bbCode,
    setBBCode: ModalValues.setBBCode,
    setFirstName: userValues.setFirstName,
    setLastName: userValues.setLastName,
    firstName: userValues.firstName,
    lastName: userValues.lastName,
    setTitlePost: ModalValues.setTitlePost,
    signature: userValues.signature,
    setSignature: userValues.setSignature,
  };

  useEffect(() => {
    ModalValues.setShow(true);
    ModalValues.setLink(
      "https://lspd-online.forumactif.com/post?f=202&mode=newtopic"
    );
  });

  return (
    <PageLayout>
      <Accordeon title="Information">
        <ContraventionAccComponent {...propsToSend} />
      </Accordeon>
      <div className="flex flex-col w-full h-full">
        <div className="w-full my-4">Log / Photo : </div>
        <HtmlEditor editorState={editorState} setEditorState={setEditorState} />
      </div>
      <GenerateButtonComponent rapportType="CONTRAV" {...propsToSend} />
    </PageLayout>
  );
};

export { ContraventionComponent };
