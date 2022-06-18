import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Modal from "react-modal";
import { closeModalContainer } from "./../../stateManagement/actions/ui";

const ModalContainer = ({ children }) => {
  const { modalIsOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "10px",
      backgroundColor: "#FFF",
      border: "none",
      width: "80%",
    },
  };
  function closeModal() {
    dispatch(closeModalContainer());
  }

  console.log("Se importo el Modal Container...");

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={customStyles}
      contentLabel="Container Modal"
    >
      {children}
    </Modal>
  );
};

export default ModalContainer;
