import { AiOutlineClose } from "react-icons/ai";

const ButtonClose = ({ size = "15", color = "#000", handleClose }) => {
  return (
    <AiOutlineClose
      className="pointer"
      size={size}
      color={color}
      onClick={handleClose}
    />
  );
};

export default ButtonClose;
