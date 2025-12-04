import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useLocation } from "react-router-dom";
import IconSystem from "../../../assets/logo2.png";
import "./Header.css";

const colors = ["#4a90e2", "#e94e77", "#50e3c2", "#f5a623", "#bd10e0"];

type User = {
  nome: string;
  email: string;
};

const user: User = {
  nome: "Franklyn Damaceno",
  email: "franklyn.damaceno@gmail.com",
};

const getColor = (name: string) => {
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

function Header() {
  const location = useLocation();
  const isAuthPage = location.pathname.startsWith("/auth");
  const initial = user.nome.charAt(0).toUpperCase();
  const bgColor = getColor(user.nome);

  return (
    <header className="register-header-client">
      <nav className="app-container">
        <div className="container-left">
          <img src={IconSystem} alt="Icon" />
        </div>

        {!isAuthPage && (
          <div className="register-navbar-right">
            <div className="container-photo-info-user">
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: bgColor,
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "18px",
                  border: "2px solid white",
                  boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                }}
              >
                {initial}
              </div>
              <span>{user.email}</span>
            </div>

            {/* Notificação com badge */}
            <div className="notification-icon">
              <FontAwesomeIcon icon={faBell} color="white" />
              <span className="notification-badge">3</span>
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
