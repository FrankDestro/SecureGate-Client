import { Outlet } from "react-router-dom"
import System from "../../components/System/System"

function Sistema() {
  return (
    <div className="app-container-content">
      <System/>
      <Outlet/>
    </div>
  )
}

export default Sistema
