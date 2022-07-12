import { useSelector, useDispatch } from "react-redux";

import Modal from "react-modal";
import { closeModalLogin } from "../../stateManagement/actions/auth";
import Authentication from "../auth/Authentication";
import { styles_M_Login } from "./stylesModals";

const ModalLogin = ({ children }) => {
  const { modalLoginIsOpen } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(closeModalLogin());
  }
  return (
    <Modal
      isOpen={modalLoginIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={styles_M_Login}
      contentLabel="Login Modal"
    >
      <Authentication />
    </Modal>
  );
};

export default ModalLogin;
