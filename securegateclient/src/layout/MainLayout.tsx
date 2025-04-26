import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";
import SiderBar from "../components/shared/SideBar/SiderBar";
import NavbarLocation from "../NavbarLocation/NavbarLocation";
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
