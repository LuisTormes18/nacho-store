import { Tabs, Tab } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoIosArrowBack } from "react-icons/io";

import useAuth from "./../../hooks/useAuth";

import "./style.css";

const ProfilePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  function handleReturn() {
    console.log("click");
    navigate(-1);
  }

  return (
    <div className="profile-page container p-5">
      <Helmet>
        <title>Perfil | Nacho Store</title>
      </Helmet>

      <button className="btn" onClick={handleReturn}>
        <IoIosArrowBack />
      </button>
      <h2>Mi perfil</h2>
      <div className="d-flex justify-content-center">
        <div>
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Datos Personales">
              <div className="container_radius p-3 d-flex justify-content-between align-items-center">
                <div>
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                  <p>{user.phone}</p>
                </div>
                <div className="font-size-14px">Editar</div>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Direcciones">
              <div className="font-size-14px text-gray text-center">
                +Agregar nueva dirección
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
