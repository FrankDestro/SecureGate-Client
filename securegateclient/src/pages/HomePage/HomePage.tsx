import { Outlet } from "react-router-dom";
import Dashboard from "../../features/Dashboard/Dashboard";

function HomePage() {
  return (
    <div className="app-container-content">
      <Dashboard />
      <Outlet />
    </div>
  );
}

export default HomePage;
