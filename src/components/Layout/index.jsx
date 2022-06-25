import Header from "./Header";
import Footer from "./Footer";
import Cinta from "./Cinta";
import WhatsApp from "./whatsApp/WhatsApp";

import "./index.css";

const LayoutContainer = ({ children }) => {
  return (
    <div className="layout">
      <WhatsApp />
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutContainer;
