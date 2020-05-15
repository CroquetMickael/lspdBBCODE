import React, { useState, useContext, useEffect } from "react";
import { Accordeon } from "../../Component/Accordeon";
import { EditorState, ContentState } from "draft-js";
import { HtmlEditor } from "../../Component/Editor/Editor.component";
import { ModalContext } from "../../Component/Context/ModalContext";
import { GenerateButtonComponent } from "../../Component/GenerateButton/GenerateButton.container";
import { UserContext } from "../../Component/Context/UserContext";
import { DetentionAccComponent } from "./DetentionAcc.component";
import { PeineComponent } from "./Peine.component";
import { PageLayout } from "../../Layout/PageLayout";

const DetentionComponent = (props: any) => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      ContentState.createFromText(`[b]Charges retenues:[/b]`)
    )
  );
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);
  const [miranda, setMiranda] = useState(false);
  const [conseil, setConseil] = useState(false);
  const [conseilName, setConseilName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [remarque, setRemarque] = useState<string>("");
  const [contactPersonne, setContactPersonne] = useState(false);
  const [nature, setNature] = useState("");
  const [suspectName, setSuspectName] = useState("");

  const propsToSend = {
    remarque,
    setRemarque,
    nature,
    setNature,
    suspectName,
    setSuspectName,
    code: editorState,
    toggleModal: ModalValues.toggleModal,
    date: userValues.currentDate,
    setDate: userValues.setCurrentDate,
    contactPersonne,
    contactNumber,
    setContactPersonne,
    setContactNumber,
    miranda,
    setMiranda,
    conseil,
    setConseil,
    conseilName,
    setConseilName,
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
      "https://lspd-online.forumactif.com/post?f=10&mode=newtopic"
    );
  });
  return (
    <PageLayout>
      <Accordeon title="Information">
        <DetentionAccComponent {...propsToSend} />
      </Accordeon>
      <Accordeon title="Peine">
        <PeineComponent />
      </Accordeon>
      <div className="flex flex-col w-full h-full">
        <div className="w-full my-4">Charges retenues: </div>
        <HtmlEditor editorState={editorState} setEditorState={setEditorState} />
      </div>
      <GenerateButtonComponent rapportType="DET" {...propsToSend} />
    </PageLayout>
  );
};

export { DetentionComponent };
