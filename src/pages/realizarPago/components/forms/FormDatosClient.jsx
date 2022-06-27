import { useDispatch } from "react-redux";
import useForm from "../../../../hooks/useForm";

const FormDatosClient = () => {
  const [state, hanleInputChange] = useForm({ email: "" });
  const { email } = state;

  function handleSubmit(e) {
    e.preventDefault();
    console.log("click");
  }

  return (
    <form className="from p-0" onSubmit={handleSubmit}>
      <div className="form-group mb-5 mt-5">
        <label>Correo electronico</label>
        <input
          className="form-control"
          onChange={hanleInputChange}
          type="email"
          name="email"
          value={email}
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

export default FormDatosClient;
