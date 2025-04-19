import { Outlet } from 'react-router-dom'
import Association from '../../components/Association/Association'

function Associacao() {
  return (
    <div className="app-container-content ">
      <Association/>
      <Outlet/>
    </div>
  )
}

export default Associacao
