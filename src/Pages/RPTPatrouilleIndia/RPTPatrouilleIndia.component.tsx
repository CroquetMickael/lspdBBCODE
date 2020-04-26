import React, { useState, useContext } from "react";
import { Accordeon } from "../../Component/Accordeon";
import { EditorState, convertFromHTML, ContentState } from "draft-js";
import { HtmlEditor } from "../../Component/Editor/Editor.component";
import { ModalContext } from "../../Component/Context/ModalContext";
import { GenerateButtonComponent } from "../../Component/GenerateButton/GenerateButton.container";
import { UserContext } from "../../Component/Context/UserContext";
import { RPTPatrouilleIndiaAccComponent } from "./RPTPatrouilleIndiaAcc.component";

const RPTPatrouilleIndiaComponent = (props: any) => {
  const [editorState, setEditorState] = useState(EditorState.createWithContent(ContentState.createFromText(`[b]Interventions effectuées :[/b] 
[b]Informations complémentaires :[/b]`)))
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);

  const [Operators, setOperators] = useState<string>("");
  const [Date, setDate] = useState<string>("");
  const [heureDebut, setHeureDebut] = useState<string>("");
  const [heureFin, setHeureFin] = useState<string>("");
  const [Vehicle, setVehicle] = useState<string>("");

  const propsToSend = {
    Operators,
    setOperators,
    code: editorState,
    toggleModal: ModalValues.toggleModal,
    Date,
    setDate,
    Vehicle,
    setVehicle,
    heureDebut,
    heureFin,
    setHeureFin,
    setHeureDebut,
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
        <RPTPatrouilleIndiaAccComponent {...propsToSend} />
      </Accordeon>
      <div className="w-full max-h-3/4">
        <HtmlEditor editorState={editorState} setEditorState={setEditorState} />
      </div>
      <GenerateButtonComponent rapportType="RAPTINDIA" {...propsToSend} />
    </div>
  );
};

export { RPTPatrouilleIndiaComponent };
