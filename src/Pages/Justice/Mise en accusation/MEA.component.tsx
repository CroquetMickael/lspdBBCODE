import React, { useState, useContext, useEffect } from "react";
import { Accordeon } from "@component/Accordeon";
import { ModalContext } from "@component/Context/ModalContext";
import { GenerateButtonComponent } from "@component/GenerateButton/GenerateButton.container";
import { UserContext } from "@component/Context/UserContext";
import { MEAAccComponent } from "./MEAAcc.component";
import { PageLayout } from "../../../Layout/PageLayout";

const MEAComponent = (props: any) => {
  const [textAeraValue, setTextAeraValue] = useState(
    `[spoiler=les preuves][/spoiler]`
  );
  const ModalValues = useContext(ModalContext);
  const userValues = useContext(UserContext);

  const [lieu, setLieu] = useState<string>("");
  const [suspectName, setSuspectName] = useState<string>("");
  const [suspectNameOOC, setSuspectNameOOC] = useState<string>("");
  const [suspectProfession, setSuspectProfession] = useState<string>("");
  const [dateFait, setDateFait] = useState(
    `Fait ` + Intl.DateTimeFormat("fr-FR").format(Date.now())
  );
  const [type, setType] = useState("");
  const [caution, setCaution] = useState("");
  const [rappel, setRappel] = useState(``);
  const [liberte, setLiberte] = useState(false);
  const propsToSend = {
    code: textAeraValue,
    toggleModal: ModalValues.toggleModal,
    date: userValues.currentDate,
    setDate: userValues.setCurrentDate, 
    grade: userValues.grade,
    setGrade: userValues.setGrade,
    lieu,
    setLieu,
    suspectName,
    setSuspectName,
    dateFait,
    setDateFait,
    suspectProfession,
    setSuspectProfession,
    suspectNameOOC,
    setSuspectNameOOC,
    type,
    setType,
    rappel,
    setRappel,
    liberte,
    setLiberte,
    caution,
    setCaution,
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
    ModalValues.setLink("https://www.leroleplay.fr/post.php?fid=118");
  });

  return (
    <PageLayout>
      <Accordeon title="Information">
        <MEAAccComponent {...propsToSend} />
      </Accordeon>
      <div className="flex flex-col w-full h-full">
        <div className="w-full my-4">Rappel des faits : </div>
        <textarea
          className="w-full h-32"
          onChange={(e: any) => setRappel(e.target.value)}
        />
        <div className="w-full my-4">Preuves: </div>
        <textarea
          className="h-64 p-2 mb-2 shadow textAera"
          value={textAeraValue}
          onChange={(e) => setTextAeraValue(e.target.value)}
        ></textarea>
      </div>
      <GenerateButtonComponent rapportType="MEA" {...propsToSend} />
    </PageLayout>
  );
};

export { MEAComponent };
