import {
  faEdit,
  faPlus,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "../../components/Button/Button";
import Modal from "../../components/ModalDefault/Modal";
import SearchInput from "../../components/SearchInput/SearchInput";
import { systemDTO } from "../../models/system/systems";
import { createEmptySystem } from "../../utils/helpers/functions";
import SystemForm from "../SystemForm/SystemForm";
import "./System.css";

type Props = {
  onSearch: (...args: string[]) => void;
  systems: systemDTO[];
  refreshList?: () => void; // nova prop
};

function System({ onSearch, systems, refreshList }: Props) {
  // ESTADOS
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentSystem, setCurrentSystem] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // ABRIR MODAL
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

  // FUNÇÕES PAI
  const handleSaveSystem = (updatedSystem: any) => {
    console.log("Sistema atualizado:", updatedSystem);
    setShowEditModal(false);
    refreshList?.();

  };

  const handleNewSaveSystem = (updatedSystem: any) => {
    console.log("Sistema adicionado:", updatedSystem);
    setShowAddModal(false); // FECHA MODAL
    refreshList?.();
  };

  const handleCancel = (info: boolean) => {
    setShowAddModal(info);
    setShowEditModal(info);
    setShowDeleteModal(info);
  };

  // FUNÇÃO DE BUSCA RESULTADOS
  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
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
          background="#006d77"
          hoverColor="#004f59"
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
              <th>Código</th>
              <th>Descrição</th>
              <th>Client ID</th>
              <th>Client Secret</th>
              <th>Data Registro</th>
              <th>Registrado por</th>
              <th>Data Última Atualização</th>
              <th>Atualziado por</th>
              <th>Ativo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {systems.map((system) => (
              <tr key={system.id}>
                <td>{system.id}</td>
                <td>{system.name}</td>
                <td>{system.code}</td>
                <td>{system.description}</td>
                <td>{system.clientId}</td>
                <td>{system.clientSecretHash}</td>
                <td>{system.createdAt}</td>
                <td>{system.createdBy}</td>
                <td>{system.updatedAt}</td>
                <td>{system.updatedBy}</td>
                <td>
                  <div className="system-container-status">
                    <span
                      className={
                        system.active ? "dot-status" : "dot-status-non-active"
                      }
                    ></span>
                    <span>{system.active ? "SIM" : "NÃO"}</span>
                  </div>
                </td>
                <td>
                  <div className="system-container-opcoes">
                    {/* <div className="container-delete-icon">
                      <div onClick={() => handleDelete(system)}>
                        <FontAwesomeIcon
                          icon={faTrash}
                          fontSize={16}
                          className="delete-icon"
                        />
                      </div>
                    </div> */}
                    <div className="container-edit-icon">
                      <div onClick={() => handleEdit(system)}>
                        <FontAwesomeIcon
                          icon={faEdit}
                          fontSize={16}
                          className="edit-icon"
                        />

                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAIS */}
      {/* ADICIONAR  */}
      <Modal
        title="Adicionar um Sistema"
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}>
        <SystemForm
          system={currentSystem!}
          onSave={handleNewSaveSystem}
          onCancel={handleCancel}
        />
      </Modal>

      {/* EDITAR  */}
      <Modal
        title={`Editar Sistema: ${currentSystem?.name}`}
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}>
        <SystemForm
          system={currentSystem}
          onSave={handleSaveSystem}
          onCancel={handleCancel}
        />
      </Modal>

      {/* DELETAR  */}
      {/* <Modal
        title={`Deletar Sistema: ${currentSystem?.name}`}
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        footer={
          <>
            <Button
              text="Confirmar"
              icon={faTrash}
              background="#006d77"
              hoverColor="#004f59"
              borderRadius="5px"
              onClick={() => setShowDeleteModal(false)}
              fullWidth={true} />
            <Button
              text="Cancelar"
              icon={faTrash}
              background="#006d77"
              hoverColor="#004f59"
              borderRadius="5px"
              onClick={() => setShowDeleteModal(false)}
              fullWidth={true} /></>
        }
      >
        <div>Tem certeza que deseja deletar este sistema?</div>
      </Modal> */}
    </div>
  );
}

export default System;
