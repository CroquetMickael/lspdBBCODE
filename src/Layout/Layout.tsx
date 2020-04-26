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
        <footer className='w-full text-center border-t border-grey p-4 pin-b'>
            Made by @Haze for LSPD LRP 2020-2021
        </footer>
        <ModalContainer
          modalOpen={modalValues.modalOpen}
          toggleModal={modalValues.toggleModal}
          bbCode={modalValues.bbCode}
          title="Code génére"
          link={modalValues.link}
          show={modalValues.show}
        />
      </div>
    </>
  );
};
export { Layout };
