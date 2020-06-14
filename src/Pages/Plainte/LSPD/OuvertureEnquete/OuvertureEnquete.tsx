import React, { useState, useContext, useEffect } from "react";
import { Accordeon } from "@component/Accordeon";
import { ModalContext } from "@component/Context/ModalContext";
import { GenerateButtonComponent } from "@component/GenerateButton/GenerateButton.container";
import { UserContext } from "@component/Context/UserContext";
import { PageLayout } from "../../../../Layout/PageLayout";
import { OuvertureEnqueteAccComponent } from "./OuvertureEnqueteAcc";
import { PeineContainer } from "@component/Peine/PeineContainer";
import { HtmlEditor } from "@component/Editor/Editor.component";
import { EditorState } from "draft-js";

const OuvertureEnqueteComponent = (props: any) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);

  const [search, setSearch] = useState<string>("");
  const [peineTotalAmende, setPeineTotalAmende] = useState<string>("0.000");
  const [peineTotalTempsOOC, setPeineTotalTempsOOC] = useState(0);
  const [infraction, setInfraction] = useState(``);

  const [officierACharge, setOfficierACharge] = useState("");
  const [lienPlainte, setLienPlainte] = useState("");
  const [idPlainte, setIdPlainte] = useState("");
  const [titrePlainte, setTitrePlainte] = useState("");
  const propsToSend = {
    peineTotalAmende,
    peineTotalTempsOOC,
    setPeineTotalAmende,
    setPeineTotalTempsOOC,
    infraction,
    search,
    setSearch,
    code: editorState,
    officierACharge,
    setOfficierACharge,
    lienPlainte,
    setLienPlainte,
    idPlainte, setIdPlainte,
    titrePlainte, setTitrePlainte,
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
    ModalValues.setLink("https://lspd-online.forumactif.com/f69-traitement-des-plaintes");
  });

  return (
    <PageLayout>
      <div className="w-full">
        <Accordeon title="Information">
          <OuvertureEnqueteAccComponent {...propsToSend} />
        </Accordeon>
      </div>
      <PeineContainer
        {...propsToSend}
        textAeraValue={infraction}
        setTextAeraValue={setInfraction}
        placeholder="Chercher la ou les infractions (possible d'en ajouter plusieurs)"
        text={""}
      />
      <div className="flex flex-col w-full h-full">
        <div className="w-full my-4">Commentaire IC : </div>
        <HtmlEditor editorState={editorState} setEditorState={setEditorState} />
      </div>
      <GenerateButtonComponent rapportType="OUVERTENQ" {...propsToSend} />
    </PageLayout>
  );
};

export { OuvertureEnqueteComponent };
