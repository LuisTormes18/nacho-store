import React from "react";

const FormEncomienda = () => {
  return (
    <div>
      <form className="row g-3 p-0">
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            placeholder="Descripcion"
          />
        </div>
        <div className="col-12">
          <select id="inputState" className="form-select">
            <option selected>Seleccionar Pais</option>
            <option>Venezuela</option>
            <option>Cuba</option>
          </select>
        </div>
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            placeholder="Direccion"
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Ciudad"
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Estado"
          />
        </div>

        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Zip Code"
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Referencia (opcional)"
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" for="gridCheck">
              guardar direccion
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormEncomienda;
