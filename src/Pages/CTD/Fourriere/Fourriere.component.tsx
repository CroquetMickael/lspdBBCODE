import React, { useState, useContext, useEffect } from "react";
import { Accordeon } from "@component/Accordeon";
import { EditorState } from "draft-js";
import { HtmlEditor } from "@component/Editor/Editor.component";
import { ModalContext } from "@component/Context/ModalContext";
import { GenerateButtonComponent } from "@component/GenerateButton/GenerateButton.container";
import { UserContext } from "@component/Context/UserContext";
import { FourriereAccComponent } from "./FourriereAcc.component";
import { PageLayout } from "../../../Layout/PageLayout";

const FourriereComponent = (props: any) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);

  const [Officers, setOfficers] = useState<string>("");
  const [Affectation, setAffectation] = useState<string>("");

  const [modeleVeh, setModeleVeh] = useState<string>("");
  const [plaqueVeh, setPlaqueVeh] = useState<string>("");
  const [proprio, setProprio] = useState<string>("");

  const [raison, setRaison] = useState<string>("");

  const propsToSend = {
    Officers,
    setOfficers,
    code: editorState,
    toggleModal: ModalValues.toggleModal,
    date: userValues.currentDate,
    setDate: userValues.setCurrentDate,
    grade: userValues.grade,
    setGrade: userValues.setGrade,
    Affectation,
    setAffectation,
    proprio,
    setProprio,
    modeleVeh,
    setModeleVeh,
    plaqueVeh,
    setPlaqueVeh,
    raison,
    setRaison,
    bbCode: ModalValues.bbCode,
    setBBCode: ModalValues.setBBCode,
    setFirstName: userValues.setFirstName,
    setLastName: userValues.setLastName,
    firstName: userValues.firstName,
    lastName: userValues.lastName,
    setTitlePost: ModalValues.setTitlePost
  };

  useEffect(() => {
    ModalValues.setShow(true);
    ModalValues.setLink(
      "https://lspd-online.forumactif.com/post?f=65&mode=newtopic"
    );
  });

  return (
    <PageLayout>
      <Accordeon title="Information">
        <FourriereAccComponent {...propsToSend} />
      </Accordeon>
      <div className="flex flex-col w-full h-full">
        <div className="w-full my-4">Commentaire à ajouter : </div>
        <HtmlEditor editorState={editorState} setEditorState={setEditorState} />
      </div>
      <GenerateButtonComponent rapportType="FOUR" {...propsToSend} />
    </PageLayout>
  );
};

export { FourriereComponent };
