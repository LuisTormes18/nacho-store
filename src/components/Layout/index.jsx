import Header from "./Header";
import Footer from "./Footer";
import Cinta from "./Cinta";

export { Header, Footer, Cinta };

const LayoutContainer = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutContainer;
