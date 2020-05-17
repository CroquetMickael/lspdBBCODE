import React, { useState, useContext, useEffect } from "react";
import { Accordeon } from "../../Component/Accordeon";
import { ModalContext } from "../../Component/Context/ModalContext";
import { GenerateButtonComponent } from "../../Component/GenerateButton/GenerateButton.container";
import { UserContext } from "../../Component/Context/UserContext";
import { DetentionAccComponent } from "./DetentionAcc.component";
import { PageLayout } from "../../Layout/PageLayout";
import { peine, ObjectPeine } from "../../Peine/peine";
import { InputComponent } from "../../Component/Input.component";
import bigDecimal from "js-big-decimal";

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
  const [resultSearch, setResultSearch] = useState<ObjectPeine[]>([]);
  const [peineSelected, setPeineSelected] = useState<ObjectPeine[]>([]);
  const [peineTotalAmende, setPeineTotalAmende] = useState<string>("0.000");
  const [peineTotalTempsOOC, setPeineTotalTempsOOC] = useState(0);

  const SelectPeine = (e: ObjectPeine) => {
    const Selected: ObjectPeine[] = peineSelected;
    Selected.push(e);
    Selected.forEach((element) => {
      let calcul = bigDecimal.add(
        peineTotalAmende.toString(),
        element.Amende.toString()
      );
      setPeineTotalAmende(calcul);
    });

    let result = Selected.sort((a: ObjectPeine, b: ObjectPeine) => {
      if (a.tempsOOC > b.tempsOOC) {
        return -1;
      }
      if (a.tempsOOC < b.tempsOOC) {
        return 1;
      }
      return 0;
    });
    if (result.length > 1) {
      setPeineTotalTempsOOC(
        parseInt(result[0].tempsOOC) + parseInt(result[1].tempsOOC)
      );
    } else {
      setPeineTotalTempsOOC(peineTotalTempsOOC + parseInt(result[0].tempsOOC));
    }

    let text = "[b]Charges retenues:[/b]\n";
    Selected.map((element: ObjectPeine) => {
      return (text += `${element.article} - ${element.label} ${element.tempsIC} ${element.typeTempsIC} et ${element.Amende}$ d'amende\n`);
    });
    setTextAeraValue(text);
    setPeineSelected(Selected);
    setSearch("");
    setResultSearch([]);
  };

  const RemovePeine = (peineSelect: ObjectPeine, e: number) => {
    const Selected: ObjectPeine[] = peineSelected;
    Selected.forEach(() =>
      setPeineTotalAmende(
        bigDecimal.add(
          peineTotalAmende.toString(),
          -peineSelect.Amende.toString()
        )
      )
    );

    let result = Selected.sort((a: ObjectPeine, b: ObjectPeine) => {
      if (a.tempsOOC > b.tempsOOC) {
        return -1;
      }
      if (a.tempsOOC < b.tempsOOC) {
        return 1;
      }
      return 0;
    });
    let peineRetirer: ObjectPeine = {
      tempsOOC: "",
      Amende: "",
      article: "",
      label: "",
      tempsIC: "",
      typeTempsIC: "",
    };
    Selected.forEach((element, index) => {
      if (element.article === peineSelect.article) {
        Selected.splice(index, 1);
        peineRetirer = element;
      }
    });
    if (result.length > 1) {
      setPeineTotalTempsOOC(
        parseInt(result[0].tempsOOC) + parseInt(result[1].tempsOOC)
      );
    } else {
      setPeineTotalTempsOOC(0);
    }
    if (result.length === 1) {
      setPeineTotalTempsOOC(
        peineTotalTempsOOC - parseInt(peineRetirer.tempsOOC)
      );
    }

    let text = "[b]Charges retenues:[/b]\n";
    Selected.map((element: ObjectPeine) => {
      return (text += `${element.article} - ${element.label} ${element.tempsIC} ${element.typeTempsIC} et ${element.Amende}$ d'amende\n`);
    });
    setTextAeraValue(text);
    setPeineSelected(Selected);
    setSearch("");
    setResultSearch([]);
  };

  const searching = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch("");
    setResultSearch([]);
    const value = e.target.value;
    setSearch(value);
    if (value !== "") {
      const filteredPeine = peine.filter((peine) => {
        const regex = new RegExp(value, "gi");
        return peine.label.match(regex) || peine.article.match(regex);
      });
      setResultSearch(filteredPeine);
    }
  };

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
    bbCode: ModalValues.bbCode,
    setBBCode: ModalValues.setBBCode,
    setFirstName: userValues.setFirstName,
    setLastName: userValues.setLastName,
    firstName: userValues.firstName,
    lastName: userValues.lastName,
    signature: userValues.signature,
    setSignature: userValues.setSignature,
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
      <div className="w-full">
        <InputComponent
          placeholder="Chercher la peine"
          type="text"
          border={true}
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => searching(e)}
        />
        {resultSearch.length !== 0 && (
          <div className="absolute flex flex-col w-full h-64 overflow-y-auto bg-white shadow">
            {resultSearch.map((result: ObjectPeine, index: number) => {
              return (
                <div
                  key={index}
                  className="py-2 cursor-pointer hover:bg-gray-300"
                  onClick={() => SelectPeine(result)}
                >
                  {result.article} - {result.label}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {peineSelected.length !== 0 && (
        <div className="w-full h-64 overflow-y-auto shadow">
          {peineSelected.map((result: ObjectPeine, index: number) => {
            return (
              <div key={index} className="py-2">
                <button
                  className="px-4 mx-2 font-semibold bg-transparent border rounded hover:border-red-500 hover:bg-red-500 hover:text-white hover:border-transparent"
                  onClick={() => RemovePeine(result, index)}
                >
                  X
                </button>
                {result.article} - {result.label} {result.tempsIC}{" "}
                {result.typeTempsIC} et {result.Amende}$ d'amende{" "}
              </div>
            );
          })}
        </div>
      )}
      <div>
        {" "}
        <p className="py-1">
          Peine à mettre en /juger :{" "}
          {parseFloat(peineTotalAmende) > parseFloat("20.000")
            ? "20.000"
            : peineTotalAmende}
          $ d'amende et {peineTotalTempsOOC} minutes
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
