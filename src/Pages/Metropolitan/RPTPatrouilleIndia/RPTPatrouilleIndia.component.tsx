import React, { useState, useContext, useEffect } from "react";
import { Accordeon } from "@component/Accordeon";
import { EditorState, ContentState } from "draft-js";
import { HtmlEditor } from "@component/Editor/Editor.component";
import { ModalContext } from "@component/Context/ModalContext";
import { GenerateButtonComponent } from "@component/GenerateButton/GenerateButton.container";
import { UserContext } from "@component/Context/UserContext";
import { RPTPatrouilleIndiaAccComponent } from "./RPTPatrouilleIndiaAcc.component";
import { PageLayout } from "../../../Layout/PageLayout";

const RPTPatrouilleIndiaComponent = (props: any) => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(``))
  );
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);

  const [Operators, setOperators] = useState<string>("");
  const [heureDebut, setHeureDebut] = useState<string>("");
  const [heureFin, setHeureFin] = useState<string>("");
  const [Vehicle, setVehicle] = useState<string>("");
  const [intervention, setIntervention] = useState<string>("");

  const propsToSend = {
    Operators,
    setOperators,
    code: editorState,
    toggleModal: ModalValues.toggleModal,
    date: userValues.currentDate,
    setDate: userValues.setCurrentDate,
    Vehicle,
    setVehicle,
    heureDebut,
    heureFin,
    setHeureFin,
    setHeureDebut,
    intervention,
    setIntervention,
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
      "https://lspd-online.forumactif.com/f83-section-des-operateurs"
    );
  });

  return (
    <PageLayout>
      <Accordeon title="Information">
        <RPTPatrouilleIndiaAccComponent {...propsToSend} />
      </Accordeon>
      <div className="flex flex-col w-full h-full">
        <div className="w-full my-4">
          Intervention(s) effectuée(s) (+lieu/secteur)
        </div>
        <textarea
          className="h-64 border border-black resize-none"
          onChange={(e: any) => setIntervention(e.target.value)}
        />
        <div className="w-full my-4">Informations complémentaires:</div>
        <HtmlEditor editorState={editorState} setEditorState={setEditorState} />
      </div>
      <GenerateButtonComponent rapportType="RAPTINDIA" {...propsToSend} />
    </PageLayout>
  );
};

export { RPTPatrouilleIndiaComponent };
