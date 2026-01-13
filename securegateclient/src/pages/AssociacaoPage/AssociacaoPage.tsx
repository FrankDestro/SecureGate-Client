import { Outlet } from 'react-router-dom'
import AssociationModule from '../../features/Association/AssociationModule'

function AssociacaoPage() {
  return (
    <div className="app-container-content">
      <AssociationModule/>
      <Outlet/>
    </div>
  )
}

export default AssociacaoPage
