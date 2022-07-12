import { useDispatch } from "react-redux";
import useForm from "../../../../hooks/useForm";

const FormDatosClient = () => {
  const [state, handleInputChange] = useForm({ email: "" });
  const { email } = state;

  function handleSubmit(e) {
    e.preventDefault();
    console.log("click");
  }

  return (
    <form className="from p-0 pb-4" onSubmit={handleSubmit}>
      <div className="form-group mb-3 mt-3">
        <label className="mb-3 mt-3 text-gray font-size-14px">
          Correo electronico
        </label>
        <input
          className="form-control"
          onChange={handleInputChange}
          type="email"
          name="email"
          value={email}
        />
      </div>

      <div className="form-group mb-3">
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
