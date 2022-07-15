import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

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
      <div className="d-flex justify-content-end">
        <AiOutlineClose
          className="pointer"
          size="15"
          color="#000"
          onClick={closeModal}
        />
      </div>
      <hr />

      <Authentication />
    </Modal>
  );
};

export default ModalLogin;
