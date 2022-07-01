import Header from "./Header";
import Footer from "./Footer";
import Cinta from "./Cinta";
import ButtonWhatsApp from "./whatsApp/ButtonWhatsApp";

import "./index.css";

const LayoutContainer = ({ children }) => {
  return (
    <div className="layout">
      <ButtonWhatsApp />
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutContainer;
