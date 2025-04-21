import {
  faHome,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Header.css";
import IconSystem from "../../../assets/SystemIcon2.png";

function Header() {
  return (
    <header className="register-header-client">
      <nav className="app-container">
        <div className="container-left">
          {/* <FontAwesomeIcon icon={faLock} fontSize={25}/> */}
          <img src={IconSystem} alt="Icon"></img>
          <h1>SecureGate - Sistema de Segurança</h1>
        </div>
        <div className="register-navbar-right">
          <div className="register-menu-items-container">
            <Link to="/cart">
              <div className="register-menu-item">
                <FontAwesomeIcon icon={faHome} />
              </div>
            </Link>
          </div>
          <FontAwesomeIcon icon={faUser} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
