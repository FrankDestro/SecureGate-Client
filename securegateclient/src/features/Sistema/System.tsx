import {
  faEdit,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/ui/Button/Button";
import SearchInput from "../../components/ui/SearchInput/SearchInput";
import { systemDTO } from "../Sistema/models/systems";
import "./System.css";
import SystemForm from "./SystemForm/SystemForm";
import { createEmptySystem } from "../Sistema/factories/system.factory";
import { StatusBadge } from "../../components/StatusBadge/StatusBadge";
import { ShieldCheck, ShieldOff } from "lucide-react";

type Props = {
  onSearch: (...args: string[]) => void;
  systems: systemDTO[];
  onReload: () => void;
};

function System({ onSearch, systems, onReload }: Props) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentSystem, setCurrentSystem] = useState<any | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleEdit = (system: any) => {
    setCurrentSystem(system);
    setShowEditModal(true);
  };

  const handleAdd = () => {
    setCurrentSystem(createEmptySystem());
    setShowAddModal(true);
  };

  const handleSaveSystem = (updatedSystem: any) => {
    console.log("Sistema atualizado:", updatedSystem);
    onReload();
    setShowEditModal(false);
  };

  const handleNewSaveSystem = (updatedSystem: any) => {
    console.log("Sistema adicionado:", updatedSystem);
    setShowAddModal(false);
  };

  const handleCancel = () => {
    setShowAddModal(false);
    setShowEditModal(false);
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(searchTerm);
  }

  return (
    <div className="system-container-main">
      <div className="title-modules-system">
        <h1>Sistemas</h1>
        <Button
          text="Adicionar Sistema"
          icon={faPlus}
          background="#009688"
          hoverColor="#00796b"
          borderRadius="5px"
          onClick={handleAdd}
        />
      </div>

      <form onSubmit={handleSubmit}>
          <SearchInput
            label="Buscar sistema"
            width="100%"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
      </form>

      <div className="system-container-table">
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Código</th>
                <th>Nome</th>
                <th>Data Registro</th>
                <th>Registrado por</th>
                <th>Data Última Atualização</th>
                <th>Atualizado por</th>
                <th>Ativo</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {systems.map((system) => (
                <tr key={system.id}>
                  <td>{system.id}</td>
                  <td>{system.code}</td>
                  <td>{system.name}</td>
                  <td>{system.createdAt}</td>
                  <td>{system.createdBy}</td>
                  <td>{system.updatedAt}</td>
                  <td>{system.updatedBy}</td>
                  <td>
                    <StatusBadge
                      icon={system.active ? <ShieldCheck /> : <ShieldOff />}
                      label={system.active ? "Ativo" : "Não ativo"}
                      variant={system.active ? "success" : "danger"}
                    />
                  </td>
                 <td>
                    <div className="table-actions">
                      <div
                        className="table-action table-action--edit"
                        onClick={() => handleEdit(system)}
                      >
                        <FontAwesomeIcon icon={faEdit} className="icon-edit" />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>

      {/* MODAIS */}

      <Modal
        title="Adicionar um Sistema"
        isOpen={showAddModal}
        onClose={handleCancel}
      >
        {currentSystem && (
          <SystemForm
            system={currentSystem}
            onSave={handleNewSaveSystem}
            onCancel={handleCancel}
          />
        )}
      </Modal>

      <Modal
        title={`Editar Sistema: ${currentSystem?.name}`}
        isOpen={showEditModal}
        onClose={handleCancel}
      >
        {currentSystem && (
          <SystemForm
            system={currentSystem}
            onSave={handleSaveSystem}
            onCancel={handleCancel}
          />
        )}
      </Modal>
    </div>
  );
}

export default System;
