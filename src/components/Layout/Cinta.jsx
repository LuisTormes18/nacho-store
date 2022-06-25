import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCurrentTime } from "./../../utils/utils";
import { closedCinta, openCinta } from "./../../stateManagement/actions/ui";

const Cinta = () => {
  const {
    ui: { isVisibilityCinta },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    let time = getCurrentTime();
    if (parseInt(time) >= 10 && parseInt(time) <= 17) {
      dispatch(closedCinta());
      return;
    }
    // si no se cumple la condicion de arriba se muestra la cinta superior
    dispatch(openCinta());
  }, []);

  if (!isVisibilityCinta) {
    return null;
  }
  return (
    <div className="cinta d-flex align-items-center justify-content-center p-2">
      <p className="text-center">
        El comercio se encuentra <b>cerrado</b>, nuestro horario de atención es
        de <b>10:00am</b> a <b>05:00pm</b>
      </p>
    </div>
  );
};

export default Cinta;
