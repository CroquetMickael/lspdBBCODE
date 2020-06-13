import React, { useState, useContext, useEffect } from "react";
import { peine, ObjectPeine } from "../../Peine/peine";
import bigDecimal from "js-big-decimal";
import { PeineComponent } from "./PeineComponent";

const PeineContainer = (props: any) => {
  const [resultSearch, setResultSearch] = useState<ObjectPeine[]>([]);
  const [peineSelected, setPeineSelected] = useState<ObjectPeine[]>([]);

  const SelectPeine = (e: ObjectPeine) => {
    const Selected: ObjectPeine[] = peineSelected;
    Selected.push(e);
    Selected.forEach((element) => {
      let calcul = bigDecimal.add(
        props.peineTotalAmende.toString(),
        element.Amende.toString()
      );
      props.setPeineTotalAmende(calcul);
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
      props.setPeineTotalTempsOOC(
        parseInt(result[0].tempsOOC) + parseInt(result[1].tempsOOC)
      );
    } else {
      props.setPeineTotalTempsOOC(
        props.peineTotalTempsOOC + parseInt(result[0].tempsOOC)
      );
    }

    let text = props.text;
    Selected.map((element: ObjectPeine) => {
      return (text += `${element.article} - ${element.label} ${element.tempsIC} ${element.typeTempsIC} et ${element.Amende}$ d'amende\n`);
    });
    props.setTextAeraValue(text);
    setPeineSelected(Selected);
    props.setSearch("");
    setResultSearch([]);
  };

  const RemovePeine = (peineSelect: ObjectPeine, e: number) => {
    const Selected: ObjectPeine[] = peineSelected;
    Selected.forEach(() =>
      props.setPeineTotalAmende(
        bigDecimal.add(
          props.peineTotalAmende.toString(),
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
      props.setPeineTotalTempsOOC(
        parseInt(result[0].tempsOOC) + parseInt(result[1].tempsOOC)
      );
    } else {
      props.setPeineTotalTempsOOC(0);
    }
    if (result.length === 1) {
      props.setPeineTotalTempsOOC(
        props.peineTotalTempsOOC - parseInt(peineRetirer.tempsOOC)
      );
    }

    let text = "[b]Charges retenues:[/b]\n";
    Selected.map((element: ObjectPeine) => {
      return (text += `${element.article} - ${element.label} ${element.tempsIC} ${element.typeTempsIC} et ${element.Amende}$ d'amende\n`);
    });
    props.setTextAeraValue(text);
    setPeineSelected(Selected);
    props.setSearch("");
    setResultSearch([]);
  };

  const searching = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearch("");
    setResultSearch([]);
    const value = e.target.value;
    props.setSearch(value);
    if (value !== "") {
      const filteredPeine = peine.filter((peine) => {
        const regex = new RegExp(value, "gi");
        return peine.label.match(regex) || peine.article.match(regex);
      });
      setResultSearch(filteredPeine);
    }
  };

  const PropsToSend = {
    searching,
    peineSelected,
    SelectPeine,
    RemovePeine,
    resultSearch,
    search: props.search
  };

  return <PeineComponent {...PropsToSend} />;
};

export { PeineContainer };
