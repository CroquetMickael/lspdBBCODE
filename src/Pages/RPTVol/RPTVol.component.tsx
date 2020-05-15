import React, { useState, useContext, useEffect } from "react";
import { Accordeon } from "../../Component/Accordeon";
import { EditorState } from "draft-js";
import { HtmlEditor } from "../../Component/Editor/Editor.component";
import { ModalContext } from "../../Component/Context/ModalContext";
import { GenerateButtonComponent } from "../../Component/GenerateButton/GenerateButton.container";
import { UserContext } from "../../Component/Context/UserContext";
import { RPTVolAccComponent } from "./RPTVolAcc.component";
import { PageLayout } from "../../Layout/PageLayout";

const RPTVolComponent = (props: any) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);
  const [etat, setEtat] = useState<string>("");
  const [Type, setType] = useState<string>("Rapport de patrouille");

  const propsToSend = {
    etat,
    setEtat,
    code: editorState,
    toggleModal: ModalValues.toggleModal,
    date: userValues.currentDate,
    setDate: userValues.setCurrentDate,
    Type,
    setType,
    bbCode: ModalValues.bbCode,
    setBBCode: ModalValues.setBBCode,
    setFirstName: userValues.setFirstName,
    setLastName: userValues.setLastName,
    firstName: userValues.firstName,
    lastName: userValues.lastName
  };
  
  useEffect(() => {
    ModalValues.setShow(false);
  })


  return (
    <PageLayout>
      <Accordeon title="Information">
        <RPTVolAccComponent {...propsToSend} />
      </Accordeon>
      <div className="flex flex-col w-full h-full">
      <div className="w-full my-4">Interventions menées: </div>
        <HtmlEditor editorState={editorState} setEditorState={setEditorState} />
      </div>
      <GenerateButtonComponent rapportType="RVOL" {...propsToSend} />
    </PageLayout>
  );
};

export { RPTVolComponent };
