import { useSelector, useDispatch } from "react-redux";

import Modal from "react-modal";
import { closeModalCart } from "../../stateManagement/actions/shoppinCart";

import Cart from "../Cart/Cart";
import "./modals.css";

const ModalCart = () => {
  const { productsInCart, modalCartIsOpen } = useSelector(
    (state) => state.shoppingCart
  );

  const dispatch = useDispatch();

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      zIndex: "5000",
    },
    content: {
      top: "80px",
      left: "auto",
      right: "5%",
      padding: "0px",
      backgroundColor: "#FFF",
      border: "none",
      borderRadius: "8px",
      width: "340px",
      height: "450px",
    },
  };

  function closeModal() {
    dispatch(closeModalCart());
  }

  return (
    <Modal
      isOpen={modalCartIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={customStyles}
      contentLabel="Cart Modal"
    >
      {productsInCart.length > 0 ? (
        <Cart />
      ) : (
        <div className="d-flex justify-content-center align-items-center h-100">
          <p>El carrito está vacio</p>
        </div>
      )}
    </Modal>
  );
};

export default ModalCart;
