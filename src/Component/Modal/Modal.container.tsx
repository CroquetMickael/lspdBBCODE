import React, { FunctionComponent } from "react";
import { ModalComponent } from "./Modal.component";

interface ModalProps {
  modalOpen: boolean;
  toggleModal: Function;
  title: string;
  bbCode: string;
  link: string;
  show: boolean;
  titlePost: string;
}

const ModalContainer: FunctionComponent<ModalProps> = (props: ModalProps) => {
  return <ModalComponent {...props}/>;
};

export { ModalContainer };