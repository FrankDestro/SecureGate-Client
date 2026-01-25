import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import SiderBar from "./SideBar/SiderBar";
import NavbarLocation from "./NavbarLocation/NavbarLocation";
import "./MainLayout.css";


function MainLayout() {
  return (
    <>
    <Header />
    <div className="main-content">
      <SiderBar />
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
