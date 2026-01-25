import {
  faEdit,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/ui/Button/Button";
import SearchInput from "../../components/ui/SearchInput/SearchInput";
import { createEmptyUser } from "./factories/user.factory";
import { dataFormat } from "../../utils/helpers/functions";
import UserForm from "./UserForm/UserForm";
import { UserDTO, UserRequest } from "./models/user";
import { CheckCircle, ShieldCheck, ShieldOff, Unlock, XCircle, Lock } from "lucide-react";
import { StatusBadge } from "../../components/StatusBadge/StatusBadge"
import "./User.css";

type Props = {
  onSearch: (...args: string[]) => void;
  users: UserDTO[];
};

function User({ onSearch, users }: Props) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAdd = () => {
    setCurrentUser(createEmptyUser());
    setShowAddModal(true);
  };

  const handleEdit = (user: UserDTO) => {
    setCurrentUser({
      name: user.name,
      email: user.email,
      enabled: user.enabled,
    });
    setShowEditModal(true);
  };

  const handleSaveUser = (user: UserRequest) => {
    console.log("Salvar usuário:", user);
    setShowAddModal(false);
    setShowEditModal(false);
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSearch(searchTerm);
  }

  return (
    <div className="user-container-main">
      <div className="title-modules-system">
        <h1>Usuários</h1>
        <Button
          text="Adicionar Usuário"
          icon={faPlus}
          background="#009688"
          hoverColor="#00796b"
          borderRadius="5px"
          onClick={handleAdd}
        />
      </div>

      <form onSubmit={handleSubmit}>
        <SearchInput
          label="Buscar usuário"
          width="100%"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <div className="user-container-main">
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Cadastro por</th>
                <th>Data Registro</th>
                <th>Status</th>
                <th>Bloqueio</th>
                <th>MFA</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.createdBy}</td>
                  <td>{dataFormat(user.createdAt)}</td>

                  {/* ATIVO */}
                  <td>
                    <StatusBadge
                      icon={user.enabled ? <CheckCircle /> : <XCircle />}
                      label={user.enabled ? "Ativo" : "Inativo"}
                      variant={user.enabled ? "success" : "danger"}
                    />
                  </td>

                  {/* BLOQUEADO */}
                  <td>
                    <StatusBadge
                      icon={user.accountNonLocked ? <Unlock /> : <Lock />}
                      label={user.accountNonLocked ? "Não bloqueado" : "Bloqueado"}
                      variant={user.accountNonLocked ? "neutral" : "danger"}
                    />
                  </td>
                  {/* MFA */}
                  <td>
                    <StatusBadge
                      icon={user.mfaEnabled ? <ShieldCheck /> : <ShieldOff />}
                      label={user.mfaEnabled ? "Ativo" : "Não ativo"}
                      variant={user.mfaEnabled ? "warning" : "neutral"}
                    />
                  </td>

                  {/* AÇÕES */}
                  <td>
                    <div className="table-actions">
                      <div
                        className="table-action table-action--edit"
                        onClick={() => handleEdit(user)}
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

      <Modal
        title="Adicionar Usuário"
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
      >
        {currentUser && (
          <UserForm
            user={currentUser}
            onCancel={() => setShowAddModal(false)}
            onSave={handleSaveUser}
          />
        )}
      </Modal>

      <Modal
        title="Editar Usuário"
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
      >
        {currentUser && (
          <UserForm
            user={currentUser}
            onCancel={() => setShowEditModal(false)}
            onSave={handleSaveUser}
          />
        )}
      </Modal>
    </div>
  );
}

export default User;



