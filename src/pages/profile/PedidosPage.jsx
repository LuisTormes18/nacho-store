import { Tabs, Tab } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoIosArrowBack } from "react-icons/io";

import "./style.css";

const PedidosPage = () => {
  const navigate = useNavigate();

  function handleReturn() {
    console.log("click");
    navigate(-1);
  }

  return (
    <div className="profile-page container p-5">
    <Helmet>
                <title>Nacho Store | Pedidos</title>
     </Helmet>

      <button className="btn" onClick={handleReturn}>
        <IoIosArrowBack />
      </button>
      <h2>Mis Pedidos</h2>
      <div className="d-flex justify-content-center">
        <div>
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Datos Personales">
              <div className="text-center">
                {" "}
                <h3>No Se ha encontado ningun pedido para mostrar</h3>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Historicó">
              <div className="text-center">
                {" "}
                <h3>No Se ha encontado ningun pedido para mostrar</h3>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PedidosPage;
