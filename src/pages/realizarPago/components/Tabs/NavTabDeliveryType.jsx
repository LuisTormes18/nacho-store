import TabButton from "./TabButton";
import FormEncomienda from "../forms/FormEncomienda";
import { GiDutchBike } from "react-icons/gi";
import { HiTruck } from "react-icons/hi";

const NavTabDeliveryType = () => {
  const [tab1, tab2] = [
    { tab: "delivery", text: "Delivery" },
    { tab: "encomienda", text: "Encomienda" },
  ];

  return (
    <div>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <TabButton tab={tab1.tab} text={tab1.text} icon={GiDutchBike} />
        </li>
        <li className="nav-item" role="presentation">
          <TabButton tab={tab2.tab} text={tab2.text} icon={HiTruck} />
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
          DeliveryTRTr
        </div>
        <div
          className="tab-pane fade"
          id={`pills-${tab2.tab}`}
          role="tabpanel"
          aria-labelledby={`pills-${tab2.tab}-tab`}
          tabIndex="1"
        >
          <FormEncomienda />
        </div>
      </div>
    </div>
  );
};

export default NavTabDeliveryType;
