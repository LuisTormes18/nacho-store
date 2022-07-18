import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";

import { closeModalLogin } from "../../stateManagement/actions/auth";
import Authentication from "../auth/Authentication";
import { styles_M_Login } from "./stylesModals";
import { ButtonClose } from "../common";

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
      <div className="d-flex justify-content-end">
        <ButtonClose handleClose={closeModal} />
      </div>
      <hr />

      <Authentication />
    </Modal>
  );
};

export default ModalLogin;
