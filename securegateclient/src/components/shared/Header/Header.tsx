import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import IconSystem from "../../../assets/SystemIcon2.png";

function Header() {
  const location = useLocation();

  const isAuthPage = location.pathname.startsWith("/auth");
  return (
    <header className="register-header-client">
      <nav className="app-container">
        <div className="container-left">
          <img src={IconSystem} alt="Icon" />
          <h1>SecureGate - Sistema de Segurança</h1>
        </div>

        {!isAuthPage && (
          <div className="register-navbar-right">
            <div className="register-menu-items-container">
              <Link to="/cart">
                <div className="register-menu-item">
                  <FontAwesomeIcon icon={faHome} />
                </div>
              </Link>
            </div>
            <NavLink to="/auth">
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
