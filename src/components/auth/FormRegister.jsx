import { useDispatch } from "react-redux";
import useForm from "./../../hooks/useForm";
import { startLoginWhitEmailAndCode } from "./../../stateManagement/actions/auth";
import "./auth.css";

const FormRegister = () => {
  const dispatch = useDispatch();
  const [state, hanleInputChange] = useForm({
    name: "",
    lastName: "",
    email: "",
  });
  const { name, lastName, email } = state;

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(startLoginWhitEmailAndCode(state));
  }

  return (
    <div className="p-4">
      <h3 className="text-center pt-2"> Crear cuenta </h3>

      <form className="from row cols-2 g-3 w-100" onSubmit={handleSubmit}>
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
        <div className="form-group col-6">
          <input
            type="submit"
            className="btn btn-outline-warning w-100"
            value="volver"
          />
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
