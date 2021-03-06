import { useDispatch } from "react-redux";
import useForm from "./../../hooks/useForm";
import { sendCode } from "./../../services/auth";
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
  function handleReturn() {
    setExistUser(null);
  }
  async function handleSubmit(e) {
    e.preventDefault();

    let code = `1234`;

    const data = await sendCode(code);

    if (data.ok) {
      dispatch(login(data.user));
      setExistUser(null);
    }
  }

  return (
    <div>
      <h3 className="text-center pt-4"> Ingresa tu cuenta </h3>

      <form className="from  row cols-2 g-3" onSubmit={handleSubmit}>
        <div className="col-12 d-flex gap-3 pb-4 pt-4">
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
        <div className="col-6 form-group mb-5">
          <button
            className="btn btn-outline-warning w-100"
            onClick={handleReturn}
          >
            Volver
          </button>
        </div>

        <div className="col-6 form-group mb-5">
          <input type="submit" className="btn w-100" value="Enviar Codigo" />
        </div>
      </form>
    </div>
  );
};

export default EnterCode;
