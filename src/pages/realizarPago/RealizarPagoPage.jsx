import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { IoIosArrowBack } from "react-icons/io";
import {
  FormDatosClient,
  NavTabDeliveryType,
  NavTabPayment,
  SummaryCart,
} from "./components";

import "./style.css";

const RealizarPagoPage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

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
            <h3 className="linea-bottom-gray">Tus datos</h3>
            {!user ? (
              <FormDatosClient />
            ) : (
              <div>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <button className="btn btn-warning">Cambiar cuenta</button>
              </div>
            )}
          </div>

          <div className="col-12 pt-0">
            <h3 className="linea-bottom-gray pt-5">Entrega</h3>

            {/*Tabs*/}
            <NavTabDeliveryType />
            {/*Fin tabs*/}
          </div>
        </div>

        <div className="right row col-6">
          <div className="col-12">
            <SummaryCart />
          </div>
          <div className="col-12">
            <NavTabPayment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealizarPagoPage;
