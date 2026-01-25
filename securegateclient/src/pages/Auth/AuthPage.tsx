import { Outlet } from "react-router-dom";
import "./AuthPage.css";
import Header from "../../layout/Header/Header";

function Auth() {
  return (
    <><Header />
      <div className="auth-container">
        <Outlet />
      </div></>
  );
}

export default Auth;
