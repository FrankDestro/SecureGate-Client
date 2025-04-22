import {
  faEdit,
  faPlus,
  faSave,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { systemDTO } from "../../models/systems";
import { createEmptySystem, dataFormat } from "../../utils/functions";
import Button from "../Button/Button";
import Modal from "../ModalDefault/Modal";
import SearchInput from "../SearchInput/SearchInput";
import SystemForm from "../SystemForm/SystemForm";
import "./System.css";

type Props = {
  onSearch: (...args: string[]) => void;
  systems: systemDTO[];
};

function System({ onSearch, systems }: Props) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentSystem, setCurrentSystem] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleEdit = (system: any) => {
    setCurrentSystem(system);
    setShowEditModal(true);
  };

  const handleDelete = (system: any) => {
    setCurrentSystem(system);
    setShowDeleteModal(true);
  };

  const handleAdd = () => {
    setCurrentSystem(createEmptySystem());
    setShowAddModal(true);
  };

  const handleSaveSystem = (updatedSystem: any) => {
    console.log("Sistema atualizado:", updatedSystem);
    setShowEditModal(false);
  };

  const handleCancelEdit = () => {
    setShowEditModal(false);
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    onSearch(searchTerm);
  }

  return (
    <div className="system-container-main">
      <div className="system-container-title">
        <h1>Sistemas</h1>
        <Button
          text="Adicionar Sistema"
          icon={faPlus}
          background="#1976d2"
          hoverColor="#1976d2"
          borderRadius="5px"
          onClick={handleAdd}
        />
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ paddingTop: "20px" }}>
          <SearchInput
            label="Buscar sistema"
            width="100%"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
      <div className="system-container-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Client ID</th>
              <th>Client Secret</th>
              <th>Descrição</th>
              <th>Ativo</th>
              <th>Data Registro</th>
              <th>Data Última Atualização</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {systems.map((system) => (
              <tr key={system.id}>
                <td>{system.id}</td>
                <td>{system.nome}</td>
                <td>{system.client_id}</td>
                <td>{system.client_secret}</td>
                <td>{system.descricao}</td>
                <td>
                  <div className="system-container-status">
                    <span
                      className={
                        system.ativo ? "dot-status" : "dot-status-non-active"
                      }
                    ></span>
                    <span>{system.ativo ? "SIM" : "NÃO"}</span>
                  </div>
                </td>
                <td>{dataFormat(system.criado_em)}</td>
                <td>{dataFormat(system.atualizado_em)}</td>

                <td>
                  <div className="system-container-opcoes">
                    <FontAwesomeIcon
                      icon={faTrash}
                      fontSize={16}
                      color="gray"
                      onClick={() => handleDelete(system)}
                    />
                    <FontAwesomeIcon
                      icon={faEdit}
                      fontSize={16}
                      color="gray"
                      onClick={() => handleEdit(system)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        title="Adicionar um Sistema"
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        footer={
          <Button
            text="Salvar"
            icon={faSave}
            background="#1976d2"
            hoverColor="#1976d2"
            borderRadius="5px"
            onClick={() => setShowAddModal(true)}
          />
        }
      >
        <SystemForm
          system={currentSystem!}
          onCancel={() => setShowAddModal(false)}
          onSave={handleSaveSystem}
        />
      </Modal>

      <Modal
        title={`Editar Sistema: ${currentSystem?.nome}`}
        isOpen={showEditModal}
        onClose={handleCancelEdit}
        footer={
          <Button
            text="Salvar Alterações"
            icon={faSave}
            background="#1976d2"
            hoverColor="#1976d2"
            borderRadius="5px"
            onClick={() => handleSaveSystem(currentSystem)}
          />
        }
      >
        <SystemForm
          system={currentSystem}
          onCancel={handleCancelEdit}
          onSave={handleSaveSystem}
        />
      </Modal>

      <Modal
        title={`Deletar Sistema: ${currentSystem?.nome}`}
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        footer={
          <Button
            text="Deletar"
            icon={faTrash}
            background="#d32f2f"
            hoverColor="#d32f2f"
            borderRadius="5px"
            onClick={() => setShowDeleteModal(false)}
          />
        }
      >
        <div>Tem certeza que deseja deletar este sistema?</div>
      </Modal>
    </div>
  );
}

export default System;
