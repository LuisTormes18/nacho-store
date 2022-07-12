import { useDispatch, useSelector } from "react-redux";
import { logout } from "./../stateManagement/actions/auth";

const useAuth = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  function handleLogout() {
    dispatch(logout());
  }

  return { user, handleLogout };
};

export default useAuth;
