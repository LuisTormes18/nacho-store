import { BsCreditCard, BsPaypal } from "react-icons/bs";
import TabButton from "./TabButton";
import FormCard from "../forms/FormCard";

const NavTabPayment = () => {
  const [tab1, tab2] = [
    { tab: "card", text: "Credito/Devito" },
    { tab: "paypal", text: "Paypal" },
  ];

  return (
    <div className="payment-container">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <TabButton tab={tab1.tab} text={tab1.text} icon={BsCreditCard} />
        </li>
        <li class="nav-item" role="presentation">
          <TabButton tab={tab2.tab} text={tab2.text} icon={BsPaypal} />
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id={`pills-${tab1.tab}`}
          role="tabpanel"
          aria-labelledby={`pills-${tab1.tab}-tab`}
          tabIndex="0"
        >
          <FormCard />
        </div>
        <div
          className="tab-pane fade"
          id={`pills-${tab2.tab}`}
          role="tabpanel"
          aria-labelledby={`pills-${tab2.tab}-tab`}
          tabIndex="1"
        >
          Paypal TRTr
        </div>
      </div>
    </div>
  );
};

export default NavTabPayment;
