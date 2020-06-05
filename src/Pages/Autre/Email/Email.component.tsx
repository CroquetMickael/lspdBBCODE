import React, { useState, useContext, useEffect } from "react";
import { Accordeon } from "@component/Accordeon";
import { EditorState } from "draft-js";
import { HtmlEditor } from "@component/Editor/Editor.component";
import { ModalContext } from "@component/Context/ModalContext";
import { GenerateButtonComponent } from "@component/GenerateButton/GenerateButton.container";
import { UserContext } from "@component/Context/UserContext";
import { EmailAccComponent } from "./EmailAcc.component";
import { PageLayout } from "../../../Layout/PageLayout";

const EmailComponent = (props: any) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);
  const [grade, setGrade] = useState<string>("");
  const [nomReceveur, setNomReceveur] = useState<string>("");
  const [prenomReceveur, setPrenomReceveur] = useState<string>("");
  const [gradeReceveur, setGradeReceveur] = useState<string>("");
  const [objetEmail, setObjetEmail] = useState<string>("");

  const propsToSend = {
    nomReceveur,
    setNomReceveur,
    code: editorState,
    toggleModal: ModalValues.toggleModal,
    date: userValues.currentDate,
    setDate: userValues.setCurrentDate,
    prenomReceveur,
    setPrenomReceveur,
    objetEmail,
    setObjetEmail,
    gradeReceveur,
    setGradeReceveur,
    grade,
    setGrade,
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
  });

  return (
    <PageLayout>
      <Accordeon title="Information">
        <EmailAccComponent {...propsToSend} />
      </Accordeon>
      <div className="flex flex-col w-full h-full">
        <div className="w-full my-4">Contenu de l'email : </div>
        <HtmlEditor editorState={editorState} setEditorState={setEditorState} />
      </div>
      <GenerateButtonComponent rapportType="EMAIL" {...propsToSend} />
    </PageLayout>
  );
};

export { EmailComponent };
