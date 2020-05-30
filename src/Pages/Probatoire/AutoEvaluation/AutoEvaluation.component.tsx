import React, { useState, useContext, useEffect } from "react";
import { Accordeon } from "@component/Accordeon";
import { EditorState } from "draft-js";
import { HtmlEditor } from "@component/Editor/Editor.component";
import { ModalContext } from "@component/Context/ModalContext";
import { GenerateButtonComponent } from "@component/GenerateButton/GenerateButton.container";
import { UserContext } from "@component/Context/UserContext";
import { AutoEvaluationAccComponent } from "./AutoEvaluationAcc.component";
import { PageLayout } from "../../../Layout/PageLayout";

const AutoEvaluationComponent = (props: any) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);

  const [probatoire2, setProbatoire2] = useState<string>("");
  const [incident, setIncident] = useState<string>("");

  const propsToSend = {
    probatoire2,
    setProbatoire2,
    code: editorState,
    toggleModal: ModalValues.toggleModal,
    date: userValues.currentDate,
    setDate: userValues.setCurrentDate,
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
      <Accordeon title="Information">
        <AutoEvaluationAccComponent {...propsToSend} />
      </Accordeon>
      <div className="flex flex-col w-full h-full">
        <div className="w-full my-4">
          Rapports d'incidents survenus durant la patrouille; hésitations sur
          une procédure
        </div>
        <textarea
          className="w-full shadow border" 
          onChange={(e: any) => setIncident(e.target.value)}
        />
        <div className="w-full my-4">
          Rapport de patrouille signé situant le contexte. :{" "}
        </div>
        <HtmlEditor editorState={editorState} setEditorState={setEditorState} />
      </div>
      <GenerateButtonComponent rapportType="PROBAUTO" {...propsToSend} />
    </PageLayout>
  );
};

export { AutoEvaluationComponent };
