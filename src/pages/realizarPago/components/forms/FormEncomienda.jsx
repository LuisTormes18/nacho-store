import React from "react";
import useForm from "./../../../../hooks/useForm";

const FormEncomienda = () => {
  const [state, handleInputChange] = useForm({
    direccion: "",
    descripcion: "",
    zipcode: "",
    ciudad: "",
    stado: "",
    ref: "",
  });
  const { direccion, descipcion, zipcode, ciudad, stado, ref } = state;
  return (
    <div>
      <form className="row g-3 p-0">
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            id="descripcion"
            name="descripcion"
            value={descipcion}
            onChange={handleInputChange}
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
            id="direccion"
            name="direccion"
            value={direccion}
            onChange={handleInputChange}
            placeholder="Direccion"
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            id="ciudad"
            name="ciudad"
            value={ciudad}
            onChange={handleInputChange}
            placeholder="Ciudad"
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            id="stado"
            name="stado"
            value={stado}
            onChange={handleInputChange}
            placeholder="Estado"
          />
        </div>

        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            id="zipcode"
            name="zipcode"
            value={zipcode}
            onChange={handleInputChange}
            placeholder="Zip Code"
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            id="ref"
            name="ref"
            value={ref}
            onChange={handleInputChange}
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
        <div className="col-12">
          <p className="font-size-14px">
            <b>Importante. </b>
            El envío es cobrado en destino. Los productos salen de Caracas,
            Venezuela, y pueden tardar entre 5 y 15 dias hábiles en llegar
            dependiendo de su destino. Tome en cuenta que este proceso puede
            retrasarse por cierres temporales de frontera motivados por el
            COVID.
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormEncomienda;
