import { useState } from "react";
import useForm from "./../../hooks/useForm";
import { sendRegister } from "./../../services/auth";

import "./auth.css";

const FormRegister = ({ setExistUser }) => {
  const [messageError, setMessageError] = useState(null);
  const [state, hanleInputChange] = useForm({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const { name, lastName, phone, email } = state;

  async function handleSubmit(e) {
    e.preventDefault();
    const ok = await sendRegister(state);
    if (!ok) {
      setMessageError("Ha Ocurrido un error");
      return;
    }
    setExistUser(ok);
  }
  function handleReturn() {
    setExistUser(null);
  }
  return (
    <div className="p-1 ">
      <h3 className="text-center pt-2"> Crear cuenta </h3>

      <form className="from row cols-2 g-3" onSubmit={handleSubmit}>
        <div className="form-group  col-6">
          <label className="form-label">Nombre</label>
          <input
            className="form-control"
            onChange={hanleInputChange}
            type="text"
            name="name"
            value={name}
          />
        </div>
        <div className="form-group col-6">
          <label className="form-label">Apellido</label>
          <input
            className="form-control"
            onChange={hanleInputChange}
            type="text"
            name="lastName"
            value={lastName}
          />
        </div>
        <div className="form-group col-12">
          <label className="form-label">Telefono</label>
          <input
            className="form-control"
            onChange={hanleInputChange}
            type="text"
            name="phone"
            value={phone}
          />
        </div>
        <div className="form-group col-12">
          <input
            className="form-control"
            onChange={hanleInputChange}
            type="email"
            name="email"
            value={email}
            placeholder="youremail@gmil.com"
          />
        </div>
        <div className="form-check col-12">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" for="gridCheck">
            guardar direccion
          </label>
        </div>
        {messageError && (
          <div className="messageErrorcol-12">
            <p>{messageError}</p>
          </div>
        )}
        <div className="form-group col-6">
          <button
            className="btn btn-outline-warning w-100"
            onClick={handleReturn}
          >
            Volver
          </button>
        </div>
        <div className="form-group col-6">
          <input
            type="submit"
            className="btn btn-warning w-100"
            value="Continuar"
          />
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
