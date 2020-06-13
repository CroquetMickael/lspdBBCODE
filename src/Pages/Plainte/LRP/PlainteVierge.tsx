import React, { useState, useContext, useEffect } from "react";
import { EditorState, ContentState } from "draft-js";
import { HtmlEditor } from "@component/Editor/Editor.component";
import { ModalContext } from "@component/Context/ModalContext";
import { GenerateButtonComponent } from "@component/GenerateButton/GenerateButton.container";
import { UserContext } from "@component/Context/UserContext";
import { PageLayout } from "../../../Layout/PageLayout";
import { InputComponent } from "@component/Input.component";

const PlainteViergeComponent = (props: any) => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(``))
  );
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);

  const [titre, setTitre] = useState<string>("");

  const propsToSend = {
    code: editorState,
    toggleModal: ModalValues.toggleModal,
    bbCode: ModalValues.bbCode,
    setBBCode: ModalValues.setBBCode,
    setFirstName: userValues.setFirstName,
    setLastName: userValues.setLastName,
    firstName: userValues.firstName,
    lastName: userValues.lastName,
    titre,
    signature: userValues.signature,
    setSignature: userValues.setSignature,
    setTitlePost: ModalValues.setTitlePost,
  };

  useEffect(() => {
    ModalValues.setShow(true);
    ModalValues.setLink("https://www.leroleplay.fr/viewforum.php?id=265");
  });

  return (
    <PageLayout>
      <div className="w-full my-8">
        <InputComponent
          placeholder="Titre"
          type="text"
          border={true}
          onChange={(e: any) => setTitre(e.target.value)}
        />
      </div>
      <div className="w-full my-8">
        <InputComponent
          placeholder="Signature"
          type="text"
          border={true}
          onChange={(e: any) => userValues.setSignature(e.target.value)}
        />
      </div>
      <div className="w-full my-4">Faire des sauts de ligne uniquement avec ENTREE et pas CTRL+ENTREE</div>
        <HtmlEditor editorState={editorState} setEditorState={setEditorState} toolbar="hidden"/>
      <GenerateButtonComponent rapportType="PLAINTEVIERGE" {...propsToSend} />
    </PageLayout>
  );
};

export { PlainteViergeComponent };
