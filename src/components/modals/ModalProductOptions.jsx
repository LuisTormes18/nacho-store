import { useSelector, useDispatch } from "react-redux";

import Modal from "react-modal";
import { closeModalOptions } from "../../stateManagement/actions/ui";
import { styles_M_Options } from "./stylesModals";
import ProductOptions from "../productOptions/ProductOptions";
import { ButtonClose } from "./../common";

import "./modals.css";

const ModalProductOptions = ({ product }) => {
  const { modalOptionsIsOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(closeModalOptions());
  }

  return (
    <Modal
      isOpen={modalOptionsIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={styles_M_Options}
      contentLabel="Options Modal"
    >
      <div className="h-100">
        <header className="d-flex justify-content-end p-3">
          <ButtonClose size="20" handleClose={closeModal} />
        </header>
        <ProductOptions />
      </div>
    </Modal>
  );
};

export default ModalProductOptions;
