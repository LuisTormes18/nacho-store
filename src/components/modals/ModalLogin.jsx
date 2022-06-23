import { useSelector, useDispatch } from "react-redux";

import Modal from "react-modal";
import { closeModalLogin } from "../../stateManagement/actions/auth";
import FormLogin from "../auth/FormLogin";

const ModalLogin = ({ children }) => {
  const { modalLoginIsOpen } = useSelector((state) => state.auth);
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
      width: "400px",
      // height: "auto",
      minHeight: "250px",
    },
  };
  function closeModal() {
    dispatch(closeModalLogin());
  }
  return (
    <Modal
      isOpen={modalLoginIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={customStyles}
      contentLabel="Login Modal"
    >
      <FormLogin />
    </Modal>
  );
};

export default ModalLogin;
