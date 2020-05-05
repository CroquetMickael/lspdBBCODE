import React, { useState, useContext, useEffect } from "react";
import { Accordeon } from "../../Component/Accordeon";
import { EditorState } from "draft-js";
import { HtmlEditor } from "../../Component/Editor/Editor.component";
import { ModalContext } from "../../Component/Context/ModalContext";
import { GenerateButtonComponent } from "../../Component/GenerateButton/GenerateButton.container";
import { UserContext } from "../../Component/Context/UserContext";
import { TirAccComponent } from "./TirAcc.component";

const TirComponent = (props: any) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);

  const [date, setDate] = useState<string>(Intl.DateTimeFormat('en-US').format(Date.now()));
  const [rangAffec, setRangAffec] = useState<string>("");
  const [superviseur, setSuperviseur] = useState<string>("");
  const [temoin, setTemoin] = useState<string>("");
  const [suspectName, setSuspectName] = useState<string>("");
  const [arme, setArme] = useState<string>("");
  const [munition, setMunition] = useState<string>("");
  const [motif, setMotif] = useState<string>("");
  const [officierCharge, setOfficierCharge] = useState<string>("");
  const [dateHeure, setDateHeure] = useState<string>("");
  const [type, setType] = useState<string>("DEC");

  const propsToSend = {
    code: editorState,
    toggleModal: ModalValues.toggleModal,
    date,
    setDate,
    rangAffec,
    setRangAffec,
    superviseur,
    setSuperviseur,
    officierCharge,
    setOfficierCharge,
    motif,
    setMotif,
    suspectName,
    munition,
    setMunition,
    dateHeure,
    setDateHeure,
    arme,
    setArme,
    setSuspectName,
    temoin,
    setTemoin,
    type,
    setType,
    bbCode: ModalValues.bbCode,
    setBBCode: ModalValues.setBBCode,
    setFirstName: userValues.setFirstName,
    setLastName: userValues.setLastName,
    firstName: userValues.firstName,
    lastName: userValues.lastName,
  };

  useEffect(() => {
    ModalValues.setShow(true);
    ModalValues.setLink(
      "https://lspd-online.forumactif.com/post?f=137&mode=newtopic"
    );
  });

  return (
    <div className="w-full p-2">
      <Accordeon title="Information">
        <TirAccComponent {...propsToSend} />
      </Accordeon>
      <div className="w-full max-h-3/4">
        <div className="w-full my-4">Contextes : </div>
        <HtmlEditor editorState={editorState} setEditorState={setEditorState} />
      </div>
      <GenerateButtonComponent rapportType="TIR" {...propsToSend} />
    </div>
  );
};

export { TirComponent };