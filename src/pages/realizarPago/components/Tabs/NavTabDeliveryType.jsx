import { Tab, Nav, Row, Col } from "react-bootstrap";
import FormEncomienda from "../forms/FormEncomienda";
import { GiDutchBike } from "react-icons/gi";
import { HiTruck } from "react-icons/hi";
import MapLeaflet from "./../map/MapLeaflet";

import "./../style.css";

const NavTabDeliveryType = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={12}>
          <Nav variant="pills" className="d-flex justify-content-start">
            <Nav.Item>
              <Nav.Link eventKey="first" className="tab-button">
                <GiDutchBike size="30" />
                Delivery
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className="tab-button">
                <HiTruck size="30" />
                Encomienda
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={12}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <MapLeaflet />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <FormEncomienda />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default NavTabDeliveryType;
