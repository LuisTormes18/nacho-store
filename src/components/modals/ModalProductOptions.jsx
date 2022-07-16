import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

import Modal from "react-modal";
import { closeModalOptions } from "../../stateManagement/actions/ui";
import { styles_M_Options } from "./stylesModals";
import ProductOptions from "../productOptions/ProductOptions";

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
      <div className="d-flex justify-content-end p-2">
        <AiOutlineClose
          className="pointer"
          size="20"
          color="#000"
          onClick={closeModal}
        />
      </div>
      <ProductOptions />
    </Modal>
  );
};

export default ModalProductOptions;
