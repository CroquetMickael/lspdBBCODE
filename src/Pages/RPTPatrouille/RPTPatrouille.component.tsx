import React, { useState, useContext } from "react";
import { Accordeon } from "../../Component/Accordeon";
import { EditorState } from "draft-js";
import { HtmlEditor } from "../../Component/Editor/Editor.component";
import { ModalContext } from "../../Component/Context/ModalContext";
import { GenerateButtonComponent } from "../../Component/GenerateButton/GenerateButton.container";
import { UserContext } from "../../Component/Context/UserContext";
import { RPTPatrouilleAccComponent } from "./RPTPatrouilleAcc.component";

const RPTPatrouilleComponent = (props: any) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);

  const [Officers, setOfficers] = useState<string>("");
  const [Date, setDate] = useState<string>("");
  const [Type, setType] = useState<string>("Rapport de patrouille");

  const propsToSend = {
    Officers,
    setOfficers,
    code: editorState,
    toggleModal: ModalValues.toggleModal,
    Date,
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

  return (
    <div className="w-full p-2">
      <Accordeon title="Information">
        <RPTPatrouilleAccComponent {...propsToSend} />
      </Accordeon>
      <div className="w-full max-h-3/4">
        <HtmlEditor editorState={editorState} setEditorState={setEditorState} />
      </div>
      <GenerateButtonComponent rapportType="RAPT" {...propsToSend} />
    </div>
  );
};

export { RPTPatrouilleComponent };
