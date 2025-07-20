import {
  faCheckCircle,
  faEdit,
  faPlus,
  faSave,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { systemDTO } from "../../models/system/systems";
import { createEmptySystem, dataFormat } from "../../utils/helpers/functions";
import Button from "../../components/Button/Button";
import Modal from "../../components/ModalDefault/Modal";
import SearchInput from "../../components/SearchInput/SearchInput";
import SystemForm from "../SystemForm/SystemForm";
import "./System.css";
import DialogInfo from "../../components/DialogInfo/DialogInfo";

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
  const [dialogInfoData, setDialogInfoData] = useState({
    visible: false,
    message: "Operação com Sucesso!",
  });

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

  const handleDialogInfoClose = () => {
    setDialogInfoData({ ...dialogInfoData, visible: false });
  };

  return (
    <div className="system-container-main">
      <div className="system-container-title">
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
                
                    <div className="container-delete-icon">
                      <div onClick={() => handleDelete(system)}>
                        <FontAwesomeIcon
                          icon={faTrash}
                          fontSize={16}
                          className="delete-icon"
                        />
                      </div>
                    </div>
                    <div className="container-edit-icon">
                      <div  onClick={() => handleEdit(system)}>
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

      <Modal
        title="Adicionar um Sistema"
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        footer={
          <Button
            text="Salvar"
            icon={faSave}
            background="#006d77"
            hoverColor="#004f59"
            borderRadius="5px"
            onClick={() => setShowAddModal(true)}
            fullWidth={true}
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
            background="#006d77"
            hoverColor="#004f59"
            borderRadius="5px"
            onClick={() => handleSaveSystem(currentSystem)}
            fullWidth={true}
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
            background="#006d77"
            hoverColor="#004f59"
            borderRadius="5px"
            onClick={() => setShowDeleteModal(false)}
            fullWidth={true}
          />
        }
      >
        <div>Tem certeza que deseja deletar este sistema?</div>
      </Modal>

      {dialogInfoData.visible && (
        <DialogInfo
          IconColor="#3a7e24"
          ButtonColor="#388E3C"
          ButtonHoverColor="#2C6B2F"
          Icon={faCheckCircle}
          description="ação realizada com sucesso"
          message={dialogInfoData.message}
          onDialogClose={handleDialogInfoClose}
        />
      )}
    </div>
  );
}

export default System;
