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
        <div className="z-10 w-full h-full">{props.children}</div>

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
