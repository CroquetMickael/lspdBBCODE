import React, { useContext } from "react";
import { Header } from "./Header";
import { ModalContainer } from "../Component/Modal/Modal.container";
import { ModalContext } from "../Component/Context/ModalContext";

const Layout = (props: any) => {
  const modalValues = useContext(ModalContext);
  return (
    <>
      <div className="flex flex-col content-start h-full">
        <Header />
        <div className="z-20 w-full h-full">{props.children}</div>
        <footer className='z-20 w-full p-4 text-center text-white bg-blue-800 border-t border-grey pin-b'>
            Made by @Haze for LSPD LRP 2020-2021
        </footer>
        <ModalContainer
          modalOpen={modalValues.modalOpen}
          toggleModal={modalValues.toggleModal}
          bbCode={modalValues.bbCode}
          title="Code génére"
          link={modalValues.link}
          show={modalValues.show}
          titlePost={modalValues.titlePost}
        />
      </div>
    </>
  );
};
export { Layout };
