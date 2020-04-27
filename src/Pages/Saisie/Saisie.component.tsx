import React, { useState, useContext, useEffect } from "react";
import { Accordeon } from "../../Component/Accordeon";
import { EditorState } from "draft-js";
import { HtmlEditor } from "../../Component/Editor/Editor.component";
import { ModalContext } from "../../Component/Context/ModalContext";
import { GenerateButtonComponent } from "../../Component/GenerateButton/GenerateButton.container";
import { UserContext } from "../../Component/Context/UserContext";
import { SaisieAccComponent } from "./SaisieAcc.component";

const SaisieComponent = (props: any) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);
  const [log, setLog] = useState("");
  const [suspectName, setSuspectName] = useState("");

  // Drogue
  const [meth, setMeth] = useState<string>("");
  const [coc, setCoc] = useState<string>("");
  const [cann, setCann] = useState<string>("");
  const [stero, setStero] = useState<string>("");
  const [hero, setHero] = useState<string>("");

  //Arme
  const [mm, setMM] = useState<string>("");
  const [mmS, setMMS] = useState<string>("");
  const [de, setDE] = useState<string>("");
  const [pompe, setPompe] = useState<string>("");
  const [uzi, setUzi] = useState<string>("");
  const [mp5, setMP5] = useState<string>("");
  const [ak, setAk] = useState<string>("");
  const [m4, setM4] = useState<string>("");
  const [tec9, setTec9] = useState<string>("");
  const [rifle, setRifle] = useState<string>("");
  const [srifle, setSRifle] = useState<string>("");
  const [rpg, setRpg] = useState<string>("");

  const propsToSend = {
    coc,
    setCoc,
    cann,
    setCann,
    stero,
    setStero,
    hero,
    setHero,
    mm,
    setMM,
    mmS,
    setMMS,
    de,
    setDE,
    pompe,
    setPompe,
    uzi,
    setUzi,
    mp5,
    setMP5,
    ak,
    setAk,
    m4,
    setM4,
    tec9,
    setTec9,
    rifle,
    setRifle,
    srifle,
    setSRifle,
    rpg,
    setRpg,
    log,
    setLog,
    suspectName,
    setSuspectName,
    code: editorState,
    toggleModal: ModalValues.toggleModal,
    meth,
    setMeth,
    bbCode: ModalValues.bbCode,
    setBBCode: ModalValues.setBBCode,
    setFirstName: userValues.setFirstName,
    setLastName: userValues.setLastName,
    firstName: userValues.firstName,
  };

  useEffect(() => {
    ModalValues.setShow(true);
    ModalValues.setLink(
      "https://lspd-online.forumactif.com/f10-enregistrements-en-detention"
    );
  });
  return (
    <div className="w-full p-2">
      <Accordeon title="Information">
        <SaisieAccComponent {...propsToSend} />
      </Accordeon>
      <div className="w-full max-h-3/4">
        <div className="w-full my-4">Contexte de la saisie (bref résumé) :</div>
        <HtmlEditor editorState={editorState} setEditorState={setEditorState} />
      </div>
      <GenerateButtonComponent rapportType="SAI" {...propsToSend} />
    </div>
  );
};

export { SaisieComponent };
