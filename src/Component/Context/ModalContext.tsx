import React, { useState, Component, FunctionComponentElement } from "react";

export interface ModalContextInterface {
  open: boolean;
  toggleOpen: () => void;
}
interface ModalProps {
  children: FunctionComponentElement<Component>;
}

const ModalContext = React.createContext<any>(null);

const ModalProvider = (props: ModalProps) => {
    const [modalOpen, setModalOpen] = useState(false);
    const toggleModal = () => setModalOpen(!modalOpen);
    const [bbCode, setBBCode] = useState("");

  return (
    <ModalContext.Provider
      value={{
        modalOpen,
        toggleModal,
        bbCode,
        setBBCode
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };