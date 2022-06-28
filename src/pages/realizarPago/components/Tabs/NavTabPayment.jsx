import { BsCreditCard, BsPaypal } from "react-icons/bs";
import TabButton from "./TabButton";
import FormCard from "../forms/FormCard";
import useTotalCartValue from "./../../../../hooks/useTotalCartValue";

const NavTabPayment = () => {
  const { total } = useTotalCartValue();

  const [tab1, tab2] = [
    { tab: "card", text: "Credito/Devito" },
    { tab: "paypal", text: "Paypal" },
  ];

  return (
    <div className="payment-container">
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <TabButton tab={tab1.tab} text={tab1.text} icon={BsCreditCard} />
        </li>
        <li className="nav-item" role="presentation">
          <TabButton tab={tab2.tab} text={tab2.text} icon={BsPaypal} />
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id={`pills-${tab1.tab}`}
          role="tabpanel"
          aria-labelledby={`pills-${tab1.tab}-tab`}
          tabIndex="2"
        >
          <FormCard />
        </div>
        <div
          className="tab-pane fade"
          id={`pills-${tab2.tab}`}
          role="tabpanel"
          aria-labelledby={`pills-${tab2.tab}-tab`}
          tabIndex="3"
        >
          <div
          className="container_plano w-100 text-center p-4"
          tabIndex="0"
        >
          <p>Has click en el boton para pagar con tu cuenta paypal</p>
          <p className="font-size-45px" > {`${total}.00`} 
          <span className="font-size-30px"> USD  </span>
          </p>
          <a href="#" className="btn btn-warning w-100">PayPal</a>
        </div>
        </div>
      </div>
    </div>
  ); 
};

export default NavTabPayment;
