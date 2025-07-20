import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faUsers,
  faLayerGroup,
  faSlidersH,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import "./SiderBar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Painel</h2>
      <nav className="sidebar-menu">
        <NavLink
          to="/home"
          className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/sistemas"
          className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faCogs} className="sidebar-icon" />
          <span>Sistemas</span>
        </NavLink>
        <NavLink
          to="/user"
          className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
          <span>Usuários</span>
        </NavLink>
        <NavLink
          to="/association"
          className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faLayerGroup} className="sidebar-icon" />
          <span>Associações</span>
        </NavLink>
        <NavLink
          to="/configuracao"
          className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={faSlidersH} className="sidebar-icon" />
          <span>Configurações</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
