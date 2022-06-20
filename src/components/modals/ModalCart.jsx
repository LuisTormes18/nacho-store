import { useSelector, useDispatch } from "react-redux";

import Modal from "react-modal";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";

import { closeModalCart } from "../../stateManagement/actions/ui";
import {
  decrementQuntityOfAProduct,
  incrementQuntityOfAProduct,
} from "./../../stateManagement/actions/shoppinCart";

import "./modals.css";

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
      backgroundColor: "rgba(0, 0, 0, 0.02)",
      zIndex: "5000",
    },
    content: {
      top: "80px",
      left: "auto",
      right: "10%",
      height: "450px",
      padding: "10px",
      backgroundColor: "#FFF",
      border: "none",
      width: "340px",
    },
  };
  function closeModal() {
    dispatch(closeModalCart());
  }
  function handleIncrement(id) {
    dispatch(incrementQuntityOfAProduct(id));
  }
  function hadleDecrement(id) {
    dispatch(decrementQuntityOfAProduct(id));
  }

  if (productsInCart.length < 1) {
    return (
      <Modal
        isOpen={modalCartIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Cart Modal"
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <p>El carrito está vacio</p>
        </div>
      </Modal>
    );
  }
  if (productsInCart.length > 0) {
    return (
      <Modal
        isOpen={modalCartIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Cart Modal"
      >
        <div className=" h-100">
          <h2>Tienes {productsInCart.length} producto</h2>
          <hr />
          {productsInCart.map((product) => (
            <div className="product-item container d-flex justify-content-between">
              <img src={product.url} alt="img-fluid" />
              <div>
                <h6>Gorra negra pequeña</h6>
                <div>
                  <IoIosAdd size="30" />
                  <span>1</span>
                  <IoIosAdd size="30" />
                </div>
              </div>
              <div className="d-flex flex-column">
                <span>20$</span>
                <RiDeleteBinLine />
              </div>
            </div>
          ))}
        </div>
      </Modal>
    );
  }
};

export default ModalCart;
