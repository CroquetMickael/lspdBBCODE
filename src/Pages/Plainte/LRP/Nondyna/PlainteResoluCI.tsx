import React, { useState, useContext, useEffect } from "react";
import { EditorState, ContentState } from "draft-js";
import { ModalContext } from "@component/Context/ModalContext";
import { GenerateButtonComponent } from "@component/GenerateButton/GenerateButton.container";
import { PageLayout } from "../../../../Layout/PageLayout";

const PlainteResoluCIComponent = (props: any) => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(``))
  );
  const ModalValues = useContext(ModalContext);

  const propsToSend = {
    code: editorState,
    setTitlePost: ModalValues.setTitlePost,
    toggleModal: ModalValues.toggleModal,
    setBBCode: ModalValues.setBBCode,
  };

  useEffect(() => {
    ModalValues.setShow(true);
    ModalValues.setLink(
      "https://www.leroleplay.fr/viewforum.php?id=265"
    );
  });

  return (
    <PageLayout>
      <GenerateButtonComponent rapportType="PLAINTERCI" {...propsToSend} />
    </PageLayout>
  );
};

export { PlainteResoluCIComponent };
