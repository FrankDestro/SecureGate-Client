import {
  faEdit,
  faPlus,
  faTrash,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import Pagination from "../Pagination/Pagination";
import SearchInput from "../SearchInput/SearchInput";
import { useState } from "react";
import Modal from "../ModalDefault/Modal";
import UserForm from "../UserForm/UserForm";
import "./User.css";

const users = [
  {
    id: "b123a456-78cd-90ef-1234-56789abcdef0",
    nome: "João Silva",
    username: "joaosilva",
    email: "joao@email.com",
    dataCriacao: "2023-01-15",
    ativo: true,
  },
  {
    id: "c234b567-89de-01fg-2345-67890bcdefg1",
    nome: "Maria Oliveira",
    username: "mariaoliveira",
    email: "maria@email.com",
    dataCriacao: "2023-02-20",
    ativo: true,
  },
  {
    id: "d345c678-90ef-12gh-3456-78901cdefgh2",
    nome: "Carlos Souza",
    username: "carlossouza",
    email: "carlos@email.com",
    dataCriacao: "2023-03-05",
    ativo: false,
  },
];

function User() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  const handleEdit = (user: any) => {
    setCurrentUser(user);
    setShowEditModal(true);
  };

  const handleDelete = (user: any) => {
    setCurrentUser(user);
    // Lógica para deletar o usuário
    console.log(`Deletando usuário ${user.nome}`);
  };

  const handleAdd = () => {
    const newUser = {
      id: "",
      nome: "",
      username: "",
      email: "",
      dataCriacao: "",
      ativo: true,
    };
    setCurrentUser(newUser);
    setShowAddModal(true);
  };

  const handleSaveUser = (updatedUser: any) => {
    console.log("Usuário atualizado:", updatedUser);
    setShowEditModal(false); // Fechar o modal após salvar
    // Aqui você pode adicionar lógica para salvar no backend ou atualizar a lista de usuários
  };

  const handleCancelEdit = () => {
    setShowEditModal(false);
  };

  return (
    <div className="user-container-main">
      <div className="user-container-title">
        <h1>Usuários</h1>
        <Button
          text="Adicionar Usuário"
          icon={faPlus}
          background="#1976d2"
          hoverColor="#1976d2"
          borderRadius="5px"
          onClick={handleAdd} // Chama a função para abrir o modal de adicionar usuário
        />
      </div>

      <div style={{ paddingTop: "20px" }}>
        <SearchInput label="Buscar usuário" width="100%" />
      </div>
      <div className="user-container-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Username</th>
              <th>Email</th>
              <th>Data Criação</th>
              <th>Ativo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nome}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.dataCriacao}</td>
                <td>
                  <div className="user-container-status">
                    <span
                      className={
                        user.ativo ? "dot-status" : "dot-status-non-active"
                      }
                    ></span>
                    <span>{user.ativo ? "SIM" : "NÃO"}</span>
                  </div>
                </td>
                <td>
                  <div className="user-container-opcoes">
                    <FontAwesomeIcon
                      icon={faTrash}
                      fontSize={16}
                      color="gray"
                      onClick={() => handleDelete(user)} // Deletar o usuário
                    />
                    <FontAwesomeIcon
                      icon={faEdit}
                      fontSize={16}
                      color="gray"
                      onClick={() => handleEdit(user)} // Editar o usuário
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination totalItems={120} itemsPerPageOptions={[10, 20, 50]} />

      {/* Modal para adicionar usuário */}
      <Modal
        title="Adicionar Usuário"
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        footer={
          <Button
            text="Salvar"
            icon={faSave}
            background="#1976d2"
            hoverColor="#1976d2"
            borderRadius="5px"
            onClick={() => handleSaveUser(currentUser)} // Chama a função para salvar o novo usuário
          />
        }
      >
        <UserForm
          user={currentUser} // Passando o usuário vazio para o formulário
          onCancel={() => setShowAddModal(false)}
          onSave={handleSaveUser} // Passando a função de salvar
        />
      </Modal>

      {/* Modal para editar usuário */}
      <Modal
        title={`Editar Usuário: ${currentUser?.nome}`}
        isOpen={showEditModal}
        onClose={handleCancelEdit}
        footer={
          <Button
            text="Salvar Alterações"
            icon={faSave}
            background="#1976d2"
            hoverColor="#1976d2"
            borderRadius="5px"
            onClick={() => handleSaveUser(currentUser)} // Passando a função para salvar
          />
        }
      >
        <UserForm
          user={currentUser} // Passando as informações do usuário atual
          onCancel={handleCancelEdit}
          onSave={handleSaveUser} // Passando a função de salvar
        />
      </Modal>
    </div>
  );
}

export default User;
