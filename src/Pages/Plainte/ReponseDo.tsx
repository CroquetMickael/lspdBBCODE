import React, { useState, useContext, useEffect } from "react";
import { Accordeon } from "@component/Accordeon";
import { ModalContext } from "@component/Context/ModalContext";
import { GenerateButtonComponent } from "@component/GenerateButton/GenerateButton.container";
import { UserContext } from "@component/Context/UserContext";
import { PageLayout } from "../../Layout/PageLayout";

const PlainteReponseDoComponent = (props: any) => {
  const [textAeraValue, setTextAeraValue] = useState(
    ``
  );
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);
  const propsToSend = {
    code: textAeraValue,
    toggleModal: ModalValues.toggleModal,
    date: userValues.currentDate,
    setDate: userValues.setCurrentDate,
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
    ModalValues.setLink("https://www.leroleplay.fr/viewforum.php?id=265");
  });

  return (
    <PageLayout>
      <div className="flex flex-col w-full h-full">
        <div className="my-2">Tapez ici vos /do pour l'enquête, inutile de mettre la couleur violette, elle sera mise automatiquement
</div>
        <textarea
          className="h-64 p-2 mb-2 shadow textAera"
          value={textAeraValue}
          onChange={(e) => setTextAeraValue(e.target.value)}
        ></textarea>
      </div>
      <GenerateButtonComponent rapportType="PLAINTEDO" {...propsToSend} />
    </PageLayout>
  );
};

export { PlainteReponseDoComponent };
