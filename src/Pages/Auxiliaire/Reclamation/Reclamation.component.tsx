import React, { useState, useContext, useEffect } from "react";
import { ModalContext } from "@component/Context/ModalContext";
import { GenerateButtonComponent } from "@component/GenerateButton/GenerateButton.container";
import { UserContext } from "@component/Context/UserContext";
import { PageLayout } from "../../../Layout/PageLayout";
import { InputComponent } from "@component/Input.component";

const ReclamationComponent = (props: any) => {
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);

  const [montant, setMontant] = useState<string>("");
  const [numVeh, setNumVeh] = useState<string>("");

  const [urlImage, setUrlImage] = useState<string>("");
  const [motif, setMotif] = useState<string>("Réparation");
  const propsToSend = {
    montant,
    setMontant,
    numVeh,
    setNumVeh,
    motif,
    setMotif,
    urlImage,
    setUrlImage,
    grade: userValues.grade,
    setGrade: userValues.setGrade,
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
    ModalValues.setLink(
      "https://lspd-online.forumactif.com/post?t=11506&mode=reply"
    );
  });

  return (
    <PageLayout>
      <div className="flex flex-wrap justify-between w-full mb-6">
        <div className="ml-4">
          <InputComponent
            placeholder="Nom"
            type="text"
            border={true}
            value={userValues.firstName}
            onChange={(e: any) => userValues.setFirstName(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Prénom"
            type="text"
            border={true}
            value={userValues.lastName}
            onChange={(e: any) => userValues.setLastName(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Signature du rapport"
            type="text"
            border={true}
            value={userValues.signature}
            onChange={(e: any) => userValues.setSignature(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Grade"
            type="text"
            border={true}
            onChange={(e: any) => userValues.setGrade(e.target.value)}
          />
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Numéro du véhicule"
            type="text"
            border={true}
            onChange={(e: any) => setNumVeh(e.target.value)}
          />
        </div>
        <div className="py-1 ml-4">
          <select
            className="py-2 shadow"
            onChange={(e: any) => setMotif(e.target.value)}
          >
            <option value="Réparation">Réparation</option>
            <option value="Essence">Essence</option>
          </select>
        </div>
        <div className="ml-4">
          <InputComponent
            placeholder="Montant déboursé"
            type="text"
            border={true}
            onChange={(e: any) => setMontant(e.target.value)}
          />
        </div>
        <div className="w-1/2 ml-4">
          <InputComponent
            placeholder="Lien de la photo"
            type="text"
            border={true}
            onChange={(e: any) => setUrlImage(e.target.value)}
          />
        </div>
      </div>
      <GenerateButtonComponent rapportType="RECLAAUXI" {...propsToSend} />
    </PageLayout>
  );
};

export { ReclamationComponent };
