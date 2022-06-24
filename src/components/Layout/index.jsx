import Header from "./Header";
import Footer from "./Footer";
import Cinta from "./Cinta";
import WhatsApp from "./whatsApp/WhatsApp";

export { Header, Footer, Cinta };

const LayoutContainer = ({ children }) => {
  return (
    <div>
      <WhatsApp />
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutContainer;
