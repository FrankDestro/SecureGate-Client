import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./MainLayout.css";
import NavbarLocation from "./NavbarLocation/NavbarLocation";
import MenuSideBar from "./SIdeBarMenu/MenuSideBar";

function MainLayout() {

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <>
      <Header />
      <div className="main-content">
        <MenuSideBar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        <div className="app-container">
          <div className="content">
            <NavbarLocation />
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
