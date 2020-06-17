import React, { useState, useContext, useEffect } from "react";
import { Accordeon } from "@component/Accordeon";
import { EditorState } from "draft-js";
import { HtmlEditor } from "@component/Editor/Editor.component";
import { ModalContext } from "@component/Context/ModalContext";
import { GenerateButtonComponent } from "@component/GenerateButton/GenerateButton.container";
import { UserContext } from "@component/Context/UserContext";
import { ObservationAccComponent } from "./ObservationAcc.component";
import { PageLayout } from "../../../Layout/PageLayout";

const ObservationComponent = (props: any) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);

  const [officierObserve, setOfficierObserve] = useState<string>("");
  const [heure, setHeure] = useState<string>("");
  const [duree, setDuree] = useState<string>("");
  const propsToSend = {
    officierObserve,
    setOfficierObserve,
    heure,
    setHeure,
    duree,
    setDuree,
    code: editorState,
    toggleModal: ModalValues.toggleModal,
    date: userValues.currentDate,
    setDate: userValues.setCurrentDate,
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
      "https://lspd-online.forumactif.com/f155-acces-interne-auxiliaire-de-police"
    );
  });

  return (
    <PageLayout>
      <Accordeon title="Information">
        <ObservationAccComponent {...propsToSend} />
      </Accordeon>
      <div className="flex flex-col w-full h-full">
        <div className="w-full my-4">Bref résumé de la patrouille : </div>
        <HtmlEditor editorState={editorState} setEditorState={setEditorState} />
      </div>
      <GenerateButtonComponent rapportType="OBSERAUXI" {...propsToSend} />
    </PageLayout>
  );
};

export { ObservationComponent };
