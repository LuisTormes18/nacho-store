import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import Chat from "./Chat";
import "./styles.css";

const ButtonWhatsApp = () => {
  const [visible, setVisible] = useState(false);
  function handleClick() {
    console.log("click");
    setVisible((visible) => !visible);
  }
  return (
    <div className="wa">
      <Chat visible={visible} setVisible={setVisible} />
      <button className="wa__icon" onClick={handleClick}>
        <SiWhatsapp size="30" color="#F1F1F1" />
      </button>
    </div>
  );
};

export default ButtonWhatsApp;
