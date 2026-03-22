import { Outlet } from "react-router-dom"
import AssociationSystemPerfis from "../../features/AssociationSystemPerfis/AssociationSystemPerfis"

function AssociacaoSystemPerfilPage() {
    return (
        <div className="app-container-content">
            <AssociationSystemPerfis />
            <Outlet />
        </div>
    )
}

export default AssociacaoSystemPerfilPage
