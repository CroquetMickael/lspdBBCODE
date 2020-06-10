import React, { useState, useContext, useEffect } from "react";
import { Accordeon } from "@component/Accordeon";
import { EditorState, ContentState } from "draft-js";
import { HtmlEditor } from "@component/Editor/Editor.component";
import { ModalContext } from "@component/Context/ModalContext";
import { GenerateButtonComponent } from "@component/GenerateButton/GenerateButton.container";
import { UserContext } from "@component/Context/UserContext";
import { DeploiementCTDAccComponent } from "./DeploiementAcc.component";
import { PageLayout } from "../../../Layout/PageLayout";

const DeploiementCTD = (props: any) => {
  const [editorState, setEditorState] = useState(EditorState.createWithContent(ContentState.createFromText("(merci d'indiquer votre indicatif)")));
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);

  const [secteur, setSecteur] = useState<string>("1-2");
  const [actions, setActions] = useState<string>("");
  const [type, setType] = useState<string>("MARY");
  const [heureDebut, setHeureDebut] = useState<string>("");
  const [heureFin, setHeureFin] = useState<string>("");

  const propsToSend = {
    secteur,
    setSecteur,
    code: editorState,
    toggleModal: ModalValues.toggleModal,
    date: userValues.currentDate,
    setDate: userValues.setCurrentDate,
    actions,
    setActions,
    type,
    setType,
    heureDebut,
    setHeureDebut,
    heureFin,
    setHeureFin,
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
      "https://lspd-online.forumactif.com/post?f=46&mode=newtopic"
    );
  });

  return (
    <PageLayout>
      <Accordeon title="Information">
        <DeploiementCTDAccComponent {...propsToSend} />
      </Accordeon>
      <div className="flex flex-col w-full h-full">
        <div className="w-full my-4">Actions menées</div>
        <textarea
          className="h-64 border border-black resize-none"
          onChange={(e: any) => setActions(e.target.value)}
        />
        <div className="w-full my-4">Commentaire à ajouter</div>
        <HtmlEditor editorState={editorState} setEditorState={setEditorState} />
      </div>
      <GenerateButtonComponent rapportType="CTDDPL" {...propsToSend} />
    </PageLayout>
  );
};

export { DeploiementCTD };
