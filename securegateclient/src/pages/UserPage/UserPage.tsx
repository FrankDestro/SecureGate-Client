import { Outlet } from "react-router-dom";
import User from "../../components/User/User";

function UserPage() {
  return (
    <div className="app-container-content ">
      <User />
      <Outlet />
    </div>
  );
}

export default UserPage;
