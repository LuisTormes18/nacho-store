import { Tab, Nav, Row, Col } from "react-bootstrap";
import { BsCreditCard, BsPaypal } from "react-icons/bs";
import FormCard from "../forms/FormCard";
import useTotalCartValue from "./../../../../hooks/useTotalCartValue";

const NavTabPayment = () => {
  const { total } = useTotalCartValue();

  return (
    <div className="container_radius p-3">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={12}>
            <Nav variant="pills" className="d-flex">
              <Nav.Item>
                <Nav.Link eventKey="first" className="tab-button">
                  <BsCreditCard size="30" />
                  Credito/Devito{" "}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" className="tab-button">
                  <BsPaypal size="30" />
                  PayPal{" "}
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <FormCard />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="container_plano w-100 text-center p-4">
                  <p>Has click en el boton para pagar con tu cuenta paypal</p>
                  <p className="font-size-45px">
                    {`${total}.00`}
                    <span className="font-size-30px"> USD </span>
                  </p>
                  <a href="#" className="btn btn-warning w-100">
                    PayPal
                  </a>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default NavTabPayment;
