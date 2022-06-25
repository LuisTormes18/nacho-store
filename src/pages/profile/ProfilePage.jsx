import { useDispatch, useSelector } from "react-redux";
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
    <div className="profile-page container p-4">
      <h1>{user?.name}</h1>
      <button className="btn btn-outline-warning" onClick={handleLogout}>
        Cerrar sesion
      </button>
    </div>
  );
};

export default ProfilePage;
