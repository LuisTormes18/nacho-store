import { useSelector, useDispatch } from "react-redux";

import Modal from "react-modal";
import { closeModalCart } from "../../stateManagement/actions/ui";

import Cart from "../Cart/Cart";

const ModalCart = () => {
  const { ui, shoppingCart } = useSelector((state) => state);
  const { modalCartIsOpen } = ui;
  const { productsInCart } = shoppingCart;
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
      right: "10%",
      height: "450px",
      padding: "0px",
      backgroundColor: "#FFF",
      border: "none",
      width: "340px",
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
