import { Outlet } from "react-router-dom";
import "./AuthPage.css";
import Header from "../../components/shared/Header/Header";

function Auth() {
  return (
    <><Header />
    <div className="auth-container">
      <Outlet />
    </div></>
  );
}

export default Auth;
