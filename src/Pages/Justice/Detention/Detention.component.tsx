import React, { useState, useContext, useEffect } from "react";
import { Accordeon } from "@component/Accordeon";
import { ModalContext } from "@component/Context/ModalContext";
import { GenerateButtonComponent } from "@component/GenerateButton/GenerateButton.container";
import { UserContext } from "@component/Context/UserContext";
import { DetentionAccComponent } from "./DetentionAcc.component";
import { PageLayout } from "../../../Layout/PageLayout";
import { PeineContainer } from "@component/Peine/PeineContainer";

const DetentionComponent = (props: any) => {
  const [textAeraValue, setTextAeraValue] = useState(
    `[b]Charges retenues:[/b]`
  );
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);
  const [miranda, setMiranda] = useState(false);
  const [conseil, setConseil] = useState(false);
  const [conseilName, setConseilName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [remarque, setRemarque] = useState<string>("");
  const [contactPersonne, setContactPersonne] = useState(false);
  const [nature, setNature] = useState("");
  const [suspectName, setSuspectName] = useState("");
  const [search, setSearch] = useState<string>("");
  const [peineTotalAmende, setPeineTotalAmende] = useState<string>("0.000");
  const [peineTotalTempsOOC, setPeineTotalTempsOOC] = useState(0);

  const propsToSend = {
    remarque,
    setRemarque,
    nature,
    setNature,
    suspectName,
    setSuspectName,
    code: textAeraValue,
    toggleModal: ModalValues.toggleModal,
    date: userValues.currentDate,
    setDate: userValues.setCurrentDate,
    contactPersonne,
    contactNumber,
    setContactPersonne,
    setContactNumber,
    miranda,
    setMiranda,
    conseil,
    setConseil,
    conseilName,
    setConseilName,
    peineTotalAmende,
    peineTotalTempsOOC,
    setPeineTotalAmende,
    setPeineTotalTempsOOC,
    setTextAeraValue,
    search,
    setSearch,
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
      "https://lspd-online.forumactif.com/post?f=10&mode=newtopic"
    );
  });
  return (
    <PageLayout>
      <Accordeon title="Information">
        <DetentionAccComponent {...propsToSend} />
      </Accordeon>
      <div>
        <PeineContainer {...propsToSend} text={"[b]Charges retenues:[/b]\n"}/>{" "}
        <p className="py-1">
          Peine à mettre en /juger :{" "}
          {parseFloat(peineTotalAmende) > parseFloat("20.000")
            ? "20.000"
            : peineTotalAmende}
          $ d'amende et {peineTotalTempsOOC} minutes
        </p>
        <p className="py-1">
          /juger [id] {peineTotalTempsOOC}{" "}
          {parseFloat(peineTotalAmende) > parseFloat("20.000")
            ? "20000"
            : parseFloat(peineTotalAmende) * 1000}
        </p>
        <p className="py-1 ">
          Rappel: Plus de 70 ans de peine IC équivaut à un CK
        </p>
      </div>
      <div className="flex flex-col w-full">
        <div className="w-full my-4">Charges retenues: </div>
        <textarea
          className="h-64 p-2 mb-2 shadow textAera"
          value={textAeraValue}
          onChange={(e) => setTextAeraValue(e.target.value)}
        ></textarea>
      </div>
      <GenerateButtonComponent rapportType="DET" {...propsToSend} />
    </PageLayout>
  );
};

export { DetentionComponent };
