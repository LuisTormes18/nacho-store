import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import {
  CartListProducts,
  TotalCartValue,
  NavTabDeliveryType,
  NavTabPayment,
  FormLogin,
} from "./../../components";
import "./style.css";

const RealizarPagoPage = () => {
  const navigate = useNavigate();

  function handleReturn() {
    console.log("click");
    navigate(-1);
  }

  return (
    <div className="container cart-page pt-1">
      <div className="row cols-2">
        <div className="left row col-6">
          <div className="col-12">
            <button className="btn" onClick={handleReturn}>
              <IoIosArrowBack />
            </button>
            <h3>Tus datos</h3>
            {/*si el usuario no esta athenticado*/}
            <FormLogin />
          </div>

          <div className="col-12">
            <h3>Entrega</h3>

            {/*Tabs*/}
            <NavTabDeliveryType />
            {/*Fin tabs*/}
          </div>
        </div>
        <div className="right row col-6">
          <div className="col-12">
            <div className="products-container">
              <h3>Resumen</h3>
              <CartListProducts />
              <TotalCartValue />
            </div>
          </div>
          <div className="col-12">
            <div className="metodo-container">
              <NavTabPayment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealizarPagoPage;
