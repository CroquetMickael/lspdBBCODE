import React, { useState, useContext, useEffect } from "react";
import { EditorState, ContentState } from "draft-js";
import { ModalContext } from "@component/Context/ModalContext";
import { GenerateButtonComponent } from "@component/GenerateButton/GenerateButton.container";
import { PageLayout } from "../../../Layout/PageLayout";
import { InputComponent } from "@component/Input.component";
import { ToggleButtonComponent } from "@component/ToggleButton.component";

const PlainteAffectationComponent = (props: any) => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(``))
  );
  const ModalValues = useContext(ModalContext);
  const [enqueteur, setEnqueteur] = useState("");
  const [number, setNumber] = useState("");
  const [showEnqueteur, setShowEnqueteur] = useState(false);
  const [showNumber, setShowNumber] = useState(false);

  const propsToSend = {
    code: editorState,
    setTitlePost: ModalValues.setTitlePost,
    toggleModal: ModalValues.toggleModal,
    setBBCode: ModalValues.setBBCode,
    enqueteur,
    number,
    showNumber,
    showEnqueteur,
  };

  useEffect(() => {
    ModalValues.setShow(true);
    ModalValues.setLink("https://www.leroleplay.fr/viewforum.php?id=265");
  });

  return (
    <PageLayout>
      <div className="flex my-8">
        <div className="w-1/2 my-8">
          <InputComponent
            placeholder="Nom de l'enquéteur"
            type="text"
            border={true}
            onChange={(e: any) => setEnqueteur(e.target.value)}
          />
        </div>
        <div className="w-1/2 ml-4">
          <ToggleButtonComponent
            label="Indiquer le nom de l'enquéteur"
            setValue={setShowEnqueteur}
            value={showEnqueteur}
          />
        </div>
      </div>
      <div className="flex my-8">
        <InputComponent
          placeholder="Numéro de l'enquéteur"
          type="text"
          border={true}
          onChange={(e: any) => setNumber(e.target.value)}
        />
        <div className="ml-4">
          <ToggleButtonComponent
            label="Indiquer le numéro de l'enquéteur"
            setValue={setShowNumber}
            value={showNumber}
          />
        </div>
      </div>
      <GenerateButtonComponent rapportType="PLAINTEAFFEC" {...propsToSend} />
    </PageLayout>
  );
};

export { PlainteAffectationComponent };
