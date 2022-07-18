import { useSelector, useDispatch } from "react-redux";

import Modal from "react-modal";
import { closeModalCart } from "../../stateManagement/actions/shoppinCart";
import Cart from "../Cart/Cart";
import { styles_M_Cart } from "./stylesModals";
import { ButtonClose } from "../common";

import "./modals.css";

const ModalCart = () => {
  const { productsInCart, modalCartIsOpen } = useSelector(
    (state) => state.shoppingCart
  );

  const dispatch = useDispatch();

  function closeModal() {
    dispatch(closeModalCart());
  }
  return (
    <Modal
      isOpen={modalCartIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={styles_M_Cart}
      contentLabel="Cart Modal"
    >
      {productsInCart.length > 0 ? (
        <Cart />
      ) : (
        <div className=" h-100">
          <header className="text-end p-3 position-absolute w-100">
            <ButtonClose handleClose={closeModal} />
          </header>
          <div className="d-flex justify-content-center align-items-center  h-100 ">
            <p>El carrito está vacio</p>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ModalCart;
