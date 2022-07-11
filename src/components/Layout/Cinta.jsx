import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { isInTheHours } from "./../../utils/utils";
import { closedCinta, openCinta } from "./../../stateManagement/actions/ui";
import { getHorario } from './../../services/api-shop';

const Cinta = () => {
  const {
    ui: { isVisibilityCinta },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [horario, setHorario] = useState(null);

  useEffect(() => {
    getHorario().then(hour=>{
      setHorario(hour);

    });
      if (isInTheHours(horario)) {
    dispatch(openCinta());
      return;
    }
    // si no se cumple la condicion de arriba no se muestra la cinta superior
      dispatch(closedCinta());
  }, []);

  if (!isVisibilityCinta) {
    return null;
  }
  return (
    <div className="cinta d-flex align-items-center justify-content-center p-2">
      <p className="text-center">
        El comercio se encuentra <b>cerrado</b>, nuestro horario de atención es
        de <b>{horario?.hour_from}am</b> a <b>{horario?.hour_to}pm</b>
      </p>
    </div>
  );
};

export default Cinta;
