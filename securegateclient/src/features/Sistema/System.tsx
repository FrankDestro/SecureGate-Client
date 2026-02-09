import {
  faEdit,
  faEye,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShieldCheck, ShieldOff } from "lucide-react";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/ui/Button/Button";
import { StatusBadge } from "../../components/ui/StatusBadge/StatusBadge";
import * as functions from "../../utils/helpers/functions";
import { createEmptySystem } from "../Sistema/factories/system.factory";
import { getEnvironmentIcon } from "./components/EnvironmentBadge/environmentBadge.icons";
import FilterBarSystem from "./components/FilterBarSystem/FilterBarSystem";
import "./System.css";
import SystemForm from "./SystemForm/SystemForm";
import { systemDTO } from "./models/systems";
import SystemViewDetails from "./components/SystemView/SystemViewDetails";

type Props = {
  onSearch: (...args: string[]) => void;
  systems: systemDTO[];
  onReload: () => void;
};

export function System({ onSearch, systems, onReload }: Props) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [currentSystem, setCurrentSystem] = useState<any | null>(null);

  const handleEdit = (system: any) => {
    setCurrentSystem(system);
    setShowEditModal(true);
  };

  const handleView = (system: any) => {
    setCurrentSystem(system);
    setShowViewModal(true);
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
     setShowViewModal(false);
  };

  return (
    <div className="system-container-main">
      <div className="title-modules-system">
        <h1>Sistemas</h1>
      </div>


      <div className="container-system-opcoes">
        {/* 🔎 FILTRO */}
        <FilterBarSystem onSearch={onSearch} />

        <div className="container-button-add-system">
          <Button
            text="Adicionar Sistema"
            icon={faPlus}
            background="#009688"
            hoverColor="#00796b"
            borderRadius="5px"
            height="45px"
            onClick={handleAdd}
          />
        </div>

      </div>

      {/* 📋 TABELA */}
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
                <th>Ambiente</th>
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
                    <span
                      style={functions.setBadgeStyleByEnvironmentType(
                        system.environmentType
                      )}
                    >
                      {getEnvironmentIcon(system.environmentType)}
                      {system.environmentType}
                    </span>
                  </td>
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
                        onClick={() => handleView(system)}
                      >
                        <FontAwesomeIcon icon={faEye} className="icon-edit" />
                      </div>
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

      {/* 🧩 MODAIS */}
      <Modal
        title="Adicionar um Sistema"
        isOpen={showAddModal}
        onClose={handleCancel}
      >
        {currentSystem && (
          <SystemForm
            title={"Adicionar Sistema"}
            system={currentSystem}
            onSave={handleNewSaveSystem}
            onCancel={handleCancel}
          />
        )}
      </Modal>

      {/* VIEW */}
      <Modal
        title={`Infomrações do Sistema: ${currentSystem?.name}`}
        isOpen={showViewModal}
        onClose={handleCancel}
      >
        {currentSystem && (
          <SystemViewDetails
            title={"Detalhes do Sistema"}
            system={currentSystem}
            onCancel={handleCancel}
          />
        )}
      </Modal>

      {/* EDIT */}
      <Modal
        title={`Editar Sistema: ${currentSystem?.name}`}
        isOpen={showEditModal}
        onClose={handleCancel}
      >
        {currentSystem && (
          <SystemForm
            title={"Editar Sistema"}
            system={currentSystem}
            onSave={handleSaveSystem}
            onCancel={handleCancel}
          />
        )}
      </Modal>
    </div>
  );
}
