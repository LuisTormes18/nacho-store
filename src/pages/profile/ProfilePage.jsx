import { useDispatch, useSelector } from "react-redux";
import { Tabs, Tab } from "react-bootstrap";

import { logout } from "./../../stateManagement/actions/auth";
import "./style.css";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  function handleLogout() {
    dispatch(logout());
  }

  if (!user) {
    return (
      <div className="profile-page d-flex justify-content-center align-items-center">
        <div>
          <h3>No ha iniciado sesion</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page container p-5">
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
                {" "}
                <div>
                  {" "}
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
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
