import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import lukalogo from "../../assets/lukalogo.svg";
import "./index.css";

const Footer = () => {
  let iconColor = "white";
  let iconSize = 16;
  return (
    <footer className="d-flex align-items-center">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="">
          <a href="#">
            <FaFacebook color={iconColor} size={iconSize} />
          </a>
          <a href="#">
            <FaTwitter color={iconColor} size={iconSize} />{" "}
          </a>
          <a href="#">
            <FaInstagram color={iconColor} size={iconSize} />
          </a>
        </div>
        <div>
          <img className="lukalogo" src={lukalogo} />{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
