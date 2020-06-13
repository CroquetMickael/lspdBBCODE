import React, { useState, useContext, useEffect } from "react";
import { EditorState, ContentState } from "draft-js";
import { ModalContext } from "@component/Context/ModalContext";
import { GenerateButtonComponent } from "@component/GenerateButton/GenerateButton.container";
import { PageLayout } from "../../../Layout/PageLayout";
import { InputComponent } from "@component/Input.component";

const PlainteCSSComponent = (props: any) => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(``))
  );
  const ModalValues = useContext(ModalContext);
  const [motif, setMotif] = useState("MOTIF A – Formalisme non respecté");
  const [detail, setDetail] = useState("");
  const propsToSend = {
    code: editorState,
    setTitlePost: ModalValues.setTitlePost,
    toggleModal: ModalValues.toggleModal,
    setBBCode: ModalValues.setBBCode,
    detail,
    motif,
  };

  useEffect(() => {
    ModalValues.setShow(true);
    ModalValues.setLink("https://www.leroleplay.fr/viewforum.php?id=265");
  });

  return (
    <PageLayout>
      <div className="w-full my-8">
        <InputComponent
          placeholder="Précisions éventuelles sur le motif du classement (mettre entre parenthèse)"
          type="text"
          border={true}
          onChange={(e: any) => setDetail(e.target.value)}
        />
      </div>
      <select
        className="my-8 border border-black"
        onChange={(e: any) => setMotif(e.target.value)}
      >
        <option value="MOTIF A – Formalisme non respecté">
          MOTIF A – Formalisme non respecté
        </option>
        <option value="MOTIF B – Faits non punissables">
          MOTIF B – Faits non punissables
        </option>
        <option value="MOTIF C – Suspect(s) non identifié(s)">
          MOTIF C – Suspect(s) non identifié(s)
        </option>
        <option value="MOTIF D – Enquête ne caractérisant pas suffisamment l'infraction">
          MOTIF D – Enquête ne caractérisant pas suffisamment l'infraction
        </option>
        <option value="MOTIF E – Retrait de la plainte">
          MOTIF E – Retrait de la plainte
        </option>
        <option value="MOTIF F – Carence du plaignant">
          MOTIF F – Carence du plaignant
        </option>
        <option value="MOTIF G – Suspect(s) décédé(s)">
          MOTIF G – Suspect(s) décédé(s)
        </option>
        <option value="MOTIF H – Auteur non responsable">
          MOTIF H – Auteur non responsable
        </option>
        <option value="MOTIF I – Comportement de la victime">
          MOTIF I – Comportement de la victime
        </option>
        <option value="MOTIF J – Investigations jugées inopportunes par le Département">
          MOTIF J – Investigations jugées inopportunes par le Département
        </option>
        <option value="MOTIF K – Vice de procédure insurmontable">
          MOTIF K – Vice de procédure insurmontable
        </option>
        <option value="MOTIF L – Décision du ministère public">
          MOTIF L – Décision du ministère public
        </option>
        <option value="MOTIF M – Suspect introuvable">
          MOTIF M – Suspect introuvable
        </option>
        <option value="MOTIF N – Autre motif">MOTIF N – Autre motif</option>
      </select>
      <GenerateButtonComponent rapportType="PLAINTECSS" {...propsToSend} />
    </PageLayout>
  );
};

export { PlainteCSSComponent };
