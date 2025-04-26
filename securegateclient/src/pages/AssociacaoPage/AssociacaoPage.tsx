import { Outlet } from 'react-router-dom'
import Association from '../../features/Association/Association'

function AssociacaoPage() {
  return (
    <div className="app-container-content ">
      <Association/>
      <Outlet/>
    </div>
  )
}

export default AssociacaoPage
