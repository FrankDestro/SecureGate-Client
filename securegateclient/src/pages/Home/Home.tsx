import { Outlet } from "react-router-dom"
import "./Home.css";

function Home() {
  return (
    <div className="app-container-content ">
      <Outlet/>
    </div>
  )
}

export default Home
