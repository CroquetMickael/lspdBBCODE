import React, { useState, useContext, useEffect } from "react";
import { Accordeon } from "../../Component/Accordeon";
import { EditorState } from "draft-js";
import { HtmlEditor } from "../../Component/Editor/Editor.component";
import { ModalContext } from "../../Component/Context/ModalContext";
import { GenerateButtonComponent } from "../../Component/GenerateButton/GenerateButton.container";
import { UserContext } from "../../Component/Context/UserContext";
import { RPTVolAccComponent } from "./RPTVolAcc.component";

const RPTVolComponent = (props: any) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);

  const [etat, setEtat] = useState<string>("");
  const [date, setDate] = useState<string>(Intl.DateTimeFormat('en-US').format(Date.now()));
  const [Type, setType] = useState<string>("Rapport de patrouille");

  const propsToSend = {
    etat,
    setEtat,
    code: editorState,
    toggleModal: ModalValues.toggleModal,
    date,
    setDate,
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
    <div className="w-full p-2">
      <Accordeon title="Information">
        <RPTVolAccComponent {...propsToSend} />
      </Accordeon>
      <div className="w-full max-h-3/4">
      <div className="w-full my-4">Interventions menées: </div>
        <HtmlEditor editorState={editorState} setEditorState={setEditorState} />
      </div>
      <GenerateButtonComponent rapportType="RVOL" {...propsToSend} />
    </div>
  );
};

export { RPTVolComponent };
