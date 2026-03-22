import {
  faGears,
  faHome,
  faLayerGroup,
  faSlidersH,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import "./MenuSideBar.css";


type MenuItem = Required<MenuProps>["items"][number];

interface MenuSideBarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const items: MenuItem[] = [
  {
    key: "/home",
    icon: <FontAwesomeIcon icon={faHome} className="icon-collapsed" />,
    label: <p>Home</p>,
  },
  {
    key: "/sistemas",
    icon: <FontAwesomeIcon icon={faGears} className="icon-collapsed" />,
    label: <p>Sistemas</p>,
  },
  {
    key: "/user",
    icon: <FontAwesomeIcon icon={faUsers} className="icon-collapsed" />,
    label: <p>Usuários</p>,
  },
  {
    label: 'Associações',
    key: '4',
    icon: <FontAwesomeIcon icon={faLayerGroup} className="icon-collapsed" />,
    children: [
      {
        type: 'group',
        label: 'Sistemas',
        children: [
          { label: 'Sistema | Perfis', key: '/associationSystemPerfis' },
          { label: 'Sistema | Usuário', key: '/association' },
        ],
      }
    ],
  },
  {
    key: "/configuracao",
    icon: <FontAwesomeIcon icon={faSlidersH} className="icon-collapsed" />,
    label: <p>Configurações</p>
  },
];

const MenuSideBar: React.FC<MenuSideBarProps> = ({ isCollapsed, toggleSidebar }) => {

  const navigate = useNavigate();

  return (
    <>
      <div className={`sidebar-container ${isCollapsed ? "collapsed" : ""}`}>
        <div className="menu-header">
          <span className="menu-title">{!isCollapsed && "Menu"}</span>
          <Button type="text" onClick={toggleSidebar} className="collapse-btn">

          </Button>
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={isCollapsed}
          items={items}
          className="custom-menu"
          onClick={({ key }) => navigate(key)}
        />

        <div className="container-user-profile">

        </div>
      </div>
    </>
  );
};

export default MenuSideBar;
