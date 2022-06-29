import React from "react";
import useForm from "../../../../hooks/useForm";

const FormCard = () => {
  const [state, handleInputChange] = useForm({
    nameCard: "",
    numberCard: "",
    date: Date(),
    cvv: "",
  });
  const { nameCard, numberCard, date, cvv } = state;
  return (
    <div>
      <form className="row g-3">
        <div className="col-md-12">
          <label for="inputEmail4" className="form-label">
            Nombre de tarjeta hanbiente
          </label>
          <input
            type="text"
            className="form-control"
            name="nameCard"
            value={nameCard}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-12">
          <label for="inputEmail4" className="form-label">
            Numero de tarjeta
          </label>
          <input
            type="text"
            className="form-control"
            name="numberCard"
            value={numberCard}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Fecha de expiracion
          </label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={date}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <label for="inputAddress2" className="form-label">
            CVV
          </label>
          <input
            type="text"
            className="form-control"
            name="cvv"
            value={cvv}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default FormCard;
