import React, { useState, useContext, useEffect } from "react";
import { Accordeon } from "@component/Accordeon";
import { ModalContext } from "@component/Context/ModalContext";
import { GenerateButtonComponent } from "@component/GenerateButton/GenerateButton.container";
import { UserContext } from "@component/Context/UserContext";
import { PageLayout } from "../../../../Layout/PageLayout";
import { PlainteAccComponent } from "./PlainteAcc";
import { PeineContainer } from "@component/Peine/PeineContainer";

const PlainteComponent = (props: any) => {
  const [fait, setFait] = useState("");
  const [preuve, setPreuve] = useState("");
  const [auxi, setAuxi] = useState(false);
  const [temoin, setTemoin] = useState("NOM Prénom - Numéro de téléphone");
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);

  //Victime
  const [victimeName, setVictimeName] = useState("");
  const [victimeLastName, setVictimeLastName] = useState("");
  const [victimeNaiss, setVictimeNaiss] = useState("");
  const [victimeLieuNaiss, setVictimeLieuNaiss] = useState("");
  const [victimeLieu, setVictimeLieu] = useState("");
  const [victimePhone, setVictimePhone] = useState("");
  const [victimeOOC, setVictimeOOC] = useState("");

  // Suspect
  const [suspectName, setSuspectName] = useState("");
  const [suspectLastName, setSuspectLastName] = useState("");
  const [suspectLieu, setSuspectLieu] = useState("");
  const [suspectPhone, setSuspectPhone] = useState("");

  const [search, setSearch] = useState<string>("");
  const [peineTotalAmende, setPeineTotalAmende] = useState<string>("0.000");
  const [peineTotalTempsOOC, setPeineTotalTempsOOC] = useState(0);
  const [accusation, setAccusation] = useState(``);
  const propsToSend = {
    victimeName,
    setVictimeName,
    victimeLastName,
    setVictimeLastName,
    victimeNaiss,
    setVictimeNaiss,
    victimeLieuNaiss,
    setVictimeLieuNaiss,
    victimeLieu,
    setVictimeLieu,
    victimePhone,
    setVictimePhone,
    suspectName,
    setSuspectName,
    suspectLastName,
    setSuspectLastName,
    suspectLieu,
    setSuspectLieu,
    suspectPhone,
    setSuspectPhone,
    preuve,
    temoin,
    setTemoin,
    auxi,
    setAuxi,
    peineTotalAmende,
    peineTotalTempsOOC,
    setPeineTotalAmende,
    setPeineTotalTempsOOC,
    victimeOOC,
    setVictimeOOC,
    accusation,
    search,
    setSearch,
    code: fait,
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
    ModalValues.setLink("https://www.leroleplay.fr/viewforum.php?id=265");
  });

  return (
    <PageLayout>
      <div className="w-full">
        <Accordeon title="Information">
          <PlainteAccComponent {...propsToSend} />
        </Accordeon>
      </div>
      <PeineContainer
        {...propsToSend}
        textAeraValue={accusation}
        setTextAeraValue={setAccusation}
        placeholder="Chercher la ou les infractions (possible d'en ajouter plusieurs)"
        text={""}
      />
      <div className="flex flex-col w-full h-full">
        <div className="w-full my-4">Accusation : </div>
        <textarea
          className="h-32 p-2 mb-2 shadow"
          value={accusation}
        ></textarea>
        <div className="w-full my-4">Récit des faits : </div>
        <textarea
          className="h-32 p-2 mb-2 shadow"
          value={fait}
          onChange={(e) => setFait(e.target.value)}
        ></textarea>
        <div className="w-full my-4">Preuves : </div>
        <textarea
          className="h-64 p-2 mb-2 shadow"
          value={preuve}
          onChange={(e) => setPreuve(e.target.value)}
        ></textarea>
      </div>
      <GenerateButtonComponent rapportType="PLAINTE" {...propsToSend} />
    </PageLayout>
  );
};

export { PlainteComponent };
