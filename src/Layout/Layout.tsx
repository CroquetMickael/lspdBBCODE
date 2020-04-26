import React, { useState, useContext } from "react";
import { Header } from "./Header";
import { ModalContainer } from "../Component/Modal/Modal.container";
import { ModalContext } from "../Component/Context/ModalContext";

const Layout = (props: any) => {
  const modalValues = useContext(ModalContext);
  return (
    <>
      <div className="flex content-start flex-wrap h-full">
        <Header />
        <div className="w-full z-20">{props.children}</div>
        <ModalContainer
          modalOpen={modalValues.modalOpen}
          toggleModal={modalValues.toggleModal}
          bbCode={modalValues.bbCode}
          title="Code génére"
        />
      </div>
    </>
  );
};
export { Layout };
