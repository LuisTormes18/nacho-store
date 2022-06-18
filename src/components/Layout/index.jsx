import Header from "./Header";
import Footer from "./Footer";
import Cinta from "./Cinta";

export { Header, Footer, Cinta };

const LayoutContainer = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutContainer;
