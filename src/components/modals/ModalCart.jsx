import { useSelector, useDispatch } from "react-redux";

import Modal from "react-modal";
import { RiDeleteBinLine, RiAddLine, RiSubtractLine } from "react-icons/ri";

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
      padding: "0px",
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
        <div className="h-100 cart">
          <header className="p-3 pb-0">
            <h4>Tienes {productsInCart.length} producto</h4>
          </header>
          <hr />
          <div className="p-2 body">
            {productsInCart.map((product) => (
              <div className="product-item d-flex align-items-center">
                <img className="img me-3" src={product.url} alt="" />

                <div>
                  <h6>Gorra negra pequeña</h6>

                  <RiSubtractLine className="icon" size="15" />
                  <span>
                    <b>1</b>
                  </span>
                  <RiAddLine className="icon" size="15" />
                </div>
                <div className="push-right d-flex flex-column ms-5 align-items-end">
                  <p>20$</p>
                  <RiDeleteBinLine size="25" />
                </div>
              </div>
            ))}
          </div>
          <footer className="container p-4 d-flex flex-column">
            <div className="d-flex justify-content-betwen">
              <span>Subtotal</span>

              <span>20$</span>
            </div>
            <hr />
            <button className="btn btn-warning">Continuar compra</button>
            <button className="btn ">vaciar carrito</button>
          </footer>
        </div>
      </Modal>
    );
  }
};

export default ModalCart;
