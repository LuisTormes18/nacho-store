import { useDispatch } from "react-redux";
import useForm from "./../../hooks/useForm";
import { login } from "./../../stateManagement/actions/auth";

import "./auth.css";

const EnterCode = ({ setExistUser }) => {
  const dispatch = useDispatch();
  const [state, hanleInputChange] = useForm({
    pin1: "",
    pin2: "",
    pin3: "",
    pin4: "",
  });
  const { pin1, pin2, pin3, pin4 } = state;

  async function handleSubmit(e) {
    e.preventDefault();

    let code = `1234`;

    const data = await sendCode(code);

    if (data.ok) {
      dispatch(login(user));
      setExistUser(null);
    }
  }

  return (
    <div>
      <h3 className="text-center pt-4"> Ingresa tu cuenta </h3>

      <form className="from " onSubmit={handleSubmit}>
        <div className="d-flex gap-3 pb-4 pt-4">
          <input
            className="form-control"
            onChange={hanleInputChange}
            type="text"
            maxlength="1"
            style={{ width: "48px" }}
            name="pin1"
            value={pin1}
          />
          <input
            className="form-control"
            onChange={hanleInputChange}
            type="text"
            maxlength="1"
            style={{ width: "48px" }}
            name="pin2"
            value={pin2}
          />
          <input
            className="form-control"
            onChange={hanleInputChange}
            type="text"
            maxlength="1"
            style={{ width: "48px" }}
            name="pin3"
            value={pin3}
          />
          <input
            className="form-control"
            onChange={hanleInputChange}
            type="text"
            maxlength="1"
            style={{ width: "48px" }}
            name="pin4"
            value={pin4}
          />
        </div>

        <div className="form-group mb-5">
          <input
            type="submit"
            className="btn btn-warning w-100"
            value="Enviar Codigo"
          />
        </div>
      </form>
    </div>
  );
};

export default EnterCode;
