import { useState } from "react";
import CustomSelect from "../form/Select/CustomSelect";
import RolesSelector from "../form/RolesSelect/RolesSelector";

const systemOptions = [
  { value: 'finance', label: 'Sistema Financeiro' },
  { value: 'crm', label: 'Sistema CRM' },
  { value: 'helpdesk', label: 'Help Desk' },
];

const rolesData = [
  { id: 'admin', title: 'Administrador', description: 'Acesso total ao sistema' },
  { id: 'operator', title: 'Operador', description: 'Permissões de operação' },
  { id: 'viewer', title: 'Visualizador', description: 'Acesso de visualização' },
  { id: 'auditor', title: 'Auditor', description: 'Função de auditoria' },
];


function SystemRoleSelector() {
  const [selectedRoles, setSelectedRoles] = useState<(string | number)[]>(['admin', 'operator']);

  const [selectedSystem, setSelectedSystem] = useState<string | number>();
  const [selectedUser, setSelectedUser] = useState<string | number>();
  return (


    <div>
      <h3>Selecionar Sistema</h3>
      <CustomSelect
        options={systemOptions}
        placeholder="Selecione um sistema"
        onChange={setSelectedSystem}
        style={{ width: 300, marginBottom: 20 }}
      />

      <div style={{ maxWidth: 400 }}>
        <RolesSelector roles={rolesData} selectedRoles={selectedRoles} onChange={setSelectedRoles} />
      </div>

    </div>


  )
}

export default SystemRoleSelector
