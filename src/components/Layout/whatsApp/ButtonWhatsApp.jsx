import { SiWhatsapp } from "react-icons/si";
import "./styles.css";

const ButtonWhatsApp = () => {
  return (
    <div className="wa">
      <button className="wa__icon">
        <SiWhatsapp size="30" color="#F1F1F1" />
      </button>
    </div>
  );
};

export default ButtonWhatsApp;
