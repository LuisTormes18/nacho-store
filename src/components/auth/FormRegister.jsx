import { useDispatch } from "react-redux";
import useForm from "./../../hooks/useForm";
import { startLoginWhitEmailAndCode } from "./../../stateManagement/actions/auth";
import "./auth.css";

const FormRegister = () => {
  const dispatch = useDispatch();
  const [state, hanleInputChange] = useForm({ name= '', email: "" });
  const { name ,email } = state;

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(startLoginWhitEmailAndCode(state));

  }

  return (
    <form className="from form-login" onSubmit={handleSubmit}>
      <div className="form-group mb-5 mt-5">
        <input
          className="form-control"
          onChange={hanleInputChange}
          type="text"
          name="name"
          value={name}
          placeholder="Juancho Perez"
        />
      </div>

      <div className="form-group mb-5 mt-5">
        <input
          className="form-control"
          onChange={hanleInputChange}
          type="email"
          name="email"
          value={email}
          placeholder="youremail@gmil.com"
        />
      </div>

      <div className="form-group mb-5">
        <input
          type="submit"
          className="btn btn-warning w-100"
          value="Continuar"
        />
      </div>
    </form>
  );
};

export default FormRegister;
