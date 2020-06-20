import React, { useState, useContext, useEffect } from "react";
import { Accordeon } from "@component/Accordeon";
import { EditorState } from "draft-js";
import { HtmlEditor } from "@component/Editor/Editor.component";
import { ModalContext } from "@component/Context/ModalContext";
import { GenerateButtonComponent } from "@component/GenerateButton/GenerateButton.container";
import { UserContext } from "@component/Context/UserContext";
import { MandatAccComponent } from "./MandatAcc.component";
import { PageLayout } from "../../../Layout/PageLayout";

const MandatComponent = (props: any) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);

  const [lieu, setLieu] = useState<string>("");
  const [suspectName, setSuspectName] = useState<string>("");
  const [dateFait, setDateFait] = useState(`Fait ` +
    Intl.DateTimeFormat("fr-FR").format(Date.now())
  );
  const [type, setType] = useState("");
  const [charge, setCharge] = useState(`[spoiler="titre"][/spoiler]`);
  const propsToSend = {
    code: editorState,
    toggleModal: ModalValues.toggleModal,
    date: userValues.currentDate,
    setDate: userValues.setCurrentDate,
    grade: userValues.grade,
    setGrade: userValues.setGrade,
    lieu,
    setLieu,
    suspectName,
    setSuspectName,
    dateFait,
    setDateFait,
    type,
    setType,
    charge,
    setCharge,
    bbCode: ModalValues.bbCode,
    setBBCode: ModalValues.setBBCode,
    setFirstName: userValues.setFirstName,
    setLastName: userValues.setLastName,
    firstName: userValues.firstName,
    lastName: userValues.lastName,
    setTitlePost: ModalValues.setTitlePost,
    signature: userValues.signature,
    setSignature: userValues.setSignature,
  };

  useEffect(() => {
    ModalValues.setShow(true);
    ModalValues.setLink(
      "https://lspd-online.forumactif.com/post?f=6&mode=newtopic"
    );
  });

  return (
    <PageLayout>
      <Accordeon title="Information">
        <MandatAccComponent {...propsToSend} />
      </Accordeon>
      <div className="flex flex-col w-full h-full">
        <div className="w-full my-4">Charge : </div>
        <textarea
          className="w-full"
          value={charge}
          onChange={(e: any) => setCharge(e.target.value)}
        />
        <div className="w-full my-4">Contexte : </div>
        <HtmlEditor editorState={editorState} setEditorState={setEditorState} />
      </div>
      <GenerateButtonComponent rapportType="MANDAT" {...propsToSend} />
    </PageLayout>
  );
};

export { MandatComponent };
