import React, { useState, useContext, useEffect } from "react";
import { EditorState, ContentState } from "draft-js";
import { ModalContext } from "@component/Context/ModalContext";
import { GenerateButtonComponent } from "@component/GenerateButton/GenerateButton.container";
import { PageLayout } from "../../../Layout/PageLayout";
import { InputComponent } from "@component/Input.component";

const PlainteResolueMEAComponent = (props: any) => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(``))
  );
  const ModalValues = useContext(ModalContext);
  const [lien, setLien] = useState("MOTIF A – Formalisme non respecté");

  const propsToSend = {
    code: editorState,
    setTitlePost: ModalValues.setTitlePost,
    toggleModal: ModalValues.toggleModal,
    setBBCode: ModalValues.setBBCode,
    lien
  };

  useEffect(() => {
    ModalValues.setShow(true);
    ModalValues.setLink(
      "https://www.leroleplay.fr/viewforum.php?id=265"
    );
  });

  return (
    <PageLayout>
      <div className="w-full my-8">
        <InputComponent
          placeholder="Lien de la MEA"
          type="text"
          border={true}
          onChange={(e: any) => setLien(e.target.value)}
        />
      </div>
      <GenerateButtonComponent rapportType="PLAINTERMEA" {...propsToSend} />
    </PageLayout>
  );
};

export { PlainteResolueMEAComponent };
