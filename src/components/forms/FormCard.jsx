import React from "react";

const FormCard = () => {
  return (
    <div>
      <form className="row g-3">
        <div className="col-md-12">
          <label for="inputEmail4" className="form-label">
            Nombre de tarjeta hanbiente
          </label>
          <input type="text" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-12">
          <label for="inputEmail4" className="form-label">
            Numero de tarjeta
          </label>
          <input type="text" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Fecha de expiracion
          </label>
          <input type="text" className="form-control" id="inputAddress" />
        </div>
        <div className="col-12">
          <label for="inputAddress2" className="form-label">
            CVV
          </label>
          <input type="text" className="form-control" id="inputAddress2" />
        </div>
      </form>
    </div>
  );
};

export default FormCard;
