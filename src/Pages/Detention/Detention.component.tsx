import React, { useState, useContext, useEffect } from "react";
import { Accordeon } from "../../Component/Accordeon";
import { EditorState, ContentState } from "draft-js";
import { HtmlEditor } from "../../Component/Editor/Editor.component";
import { ModalContext } from "../../Component/Context/ModalContext";
import { GenerateButtonComponent } from "../../Component/GenerateButton/GenerateButton.container";
import { UserContext } from "../../Component/Context/UserContext";
import { DetentionAccComponent } from "./DetentionAcc.component";
import { PageLayout } from "../../Layout/PageLayout";
import { peine, ObjectPeine } from "../../Peine/peine";
import { InputComponent } from "../../Component/Input.component";
import bigDecimal from "js-big-decimal";

const DetentionComponent = (props: any) => {
  const [editorState, setEditorState] = useState<any>(
    EditorState.createWithContent(
      ContentState.createFromText(`[b]Charges retenues:[/b]`)
    )
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

    const result = Selected.sort((a: ObjectPeine, b: ObjectPeine) => {
      if (a.tempsOOC > b.tempsOOC && a.Amende > b.Amende) {
        return -1;
      }
      if (a.tempsOOC < b.tempsOOC && a.Amende > b.Amende) {
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
    const result = Selected.sort((a: ObjectPeine, b: ObjectPeine) => {
      if (a.tempsOOC > b.tempsOOC && a.Amende > b.Amende) {
        return -1;
      }
      if (a.tempsOOC < b.tempsOOC && a.Amende > b.Amende) {
        return 1;
      }
      return 0;
    });
    Selected.forEach((element, index) => {
      if (result.length > 1) {
        if (result[0].article === peineSelect.article) {
          setPeineTotalTempsOOC(
            peineTotalTempsOOC - parseInt(result[0].tempsOOC)
          );
        } else if (result[1].article === peineSelect.article) {
          setPeineTotalTempsOOC(
            peineTotalTempsOOC - parseInt(result[1].tempsOOC)
          );
        }
      } else {
        setPeineTotalTempsOOC(
          peineTotalTempsOOC - parseInt(result[0].tempsOOC)
        );
      }
      if (element.article === peineSelect.article) {
        Selected.splice(index, 1);
      }
    });
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
    code: editorState,
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
      </div>
      {resultSearch.length !== 0 && (
        <div className="flex flex-col w-full h-64 overflow-y-auto bg-white shadow">
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
      <div className="flex flex-col w-full mt-8">
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
        <p className="py-4">
         Peine à mettre en /juger :{" "}
          {peineTotalAmende > "20.000" ? "20.000" : peineTotalAmende}$ d'amende
          et {peineTotalTempsOOC} minutes
        </p><p className="py-4">
         Rappel: Plus de 70 ans de peine IC équivaut à un CK
        </p>
      </div>
      <div className="flex flex-col w-full h-full">
        <div className="w-full my-4">Charges retenues: </div>
        <HtmlEditor editorState={editorState} setEditorState={setEditorState} />
      </div>
      <GenerateButtonComponent rapportType="DET" {...propsToSend} />
    </PageLayout>
  );
};

export { DetentionComponent };
