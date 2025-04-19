import {
  faCogs,
  faHome,
  faSlidersH,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

import { faLayerGroup } from "@fortawesome/free-solid-svg-icons/faLayerGroup";
import "./NavbarLocation.css";

const NavbarLocation = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return { title: "Home | Panel", icon: faHome };
      case "/user":
        return { title: "Usuários", icon: faUsers };
      case "/association":
        return { title: "Associação", icon: faLayerGroup };
      case "/configuracao":
        return { title: "Configurações", icon: faSlidersH };
      case "/sistemas":
        return { title: "Sistemas", icon: faCogs };
      default:
        return { title: "", icon: null };
    }
  };

  const { title, icon } = getTitle();

  return (
    <div className="container-navbar-location">
      <div className="container-content-navbar-location">
        {icon && <FontAwesomeIcon icon={icon} className="navbar-icon" />}
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default NavbarLocation;
