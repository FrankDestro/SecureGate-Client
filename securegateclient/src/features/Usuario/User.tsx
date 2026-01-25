// import {
//   faEdit,
//   faPlus,
//   faSave,
//   faTrash,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";
// import Button from "../../components/ui/Button/Button";
// import Modal from "../../components/Modal/Modal";
// import SearchInput from "../../components/ui/SearchInput/SearchInput";
// import { UserDTO } from "./models/user";
// import {
//   dataFormat
// } from "../../utils/helpers/functions";
// import UserForm from "../UserForm/UserForm";
// import "./User.css";

// type Props = {
//   onSearch: (...args: string[]) => void;
//   users: UserDTO[];
// };

// function User({ onSearch, users }: Props) {
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [currentUser, setCurrentUser] = useState<any>(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleEdit = (user: any) => {
//     setCurrentUser(user);
//     setShowEditModal(true);
//   };

//   const handleDelete = (user: any) => {
//     setCurrentUser(user);
//     console.log(`Deletando usuário ${user.nome}`);
//   };

//   const handleAdd = () => {
//     const newUser = {
//       id: "",
//       nome: "",
//       username: "",
//       email: "",
//       dataCriacao: "",
//       ativo: true,
//     };
//     setCurrentUser(newUser);
//     setShowAddModal(true);
//   };

//   const handleSaveUser = (updatedUser: any) => {
//     console.log("Usuário atualizado:", updatedUser);
//     setShowEditModal(false);
//   };

//   const handleCancelEdit = () => {
//     setShowEditModal(false);
//   };

//   function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
//     event.preventDefault();
//     onSearch(searchTerm);
//   }

//   return (
//     <div className="user-container-main">
//       <div className="title-modules-system">
//         <h1>Usuários</h1>
//         <Button
//           text="Adicionar Usuário"
//           icon={faPlus}
//            background="#009688"
//           hoverColor="#00796b"
//           borderRadius="5px"
//           onClick={handleAdd}
//         />
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div style={{ paddingTop: "20px" }}>
//           <SearchInput
//             label="Buscar usuário"
//             width="100%"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </form>
//       <div className="user-container-table">
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Nome</th>
//               <th>Username</th>
//               <th>Email</th>
//               <th>Cadastro por</th>
//               <th>Data Registro</th>
//               <th>Atualizado por</th>
//               <th>Data Última Atualização</th>
//               <th>Ativo</th>
//               <th>Bloqueado</th>
//               <th>MFA</th>
//               <th>Ações</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id}>
//                 <td>{user.id}</td>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.email}</td>
//                 <td>{user.createdBy}</td>
//                 <td>{dataFormat(user.createdAt)}</td>
//                 <td>{user.updatedBy}</td>
//                 <td>{dataFormat(user.updatedAt)}</td>
//                 <td>
//                   <div className="user-container-status">
//                     <span
//                       className={
//                         user.enabled ? "dot-status" : "dot-status-non-active"
//                       }
//                     ></span>
//                   </div>
//                 </td>
//                 <td>
//                   <div className="user-container-status">
//                     {user.accountNonLocked ? (
//                       "Não bloqueado"
//                     ) : (
//                       "Bloqueado"
//                     )}
//                   </div>
//                 </td>
//                  <td>
//                   <div className="user-container-status">
//                     {!user.mfaEnabled ? (
//                       "Não ativo"
//                     ) : (
//                       "Ativo"
//                     )}
//                   </div>
//                 </td>
//                 <td>
//                   <div className="user-container-opcoes">
//                     <div className="container-delete-icon">
//                       <div onClick={() => handleDelete(user)}>
//                         <FontAwesomeIcon
//                           icon={faTrash}
//                           fontSize={16}
//                           className="delete-icon"
//                         />
//                       </div>
//                     </div>
//                     <div className="container-edit-icon">
//                       <div onClick={() => handleEdit(user)}>
//                         <FontAwesomeIcon
//                           icon={faEdit}
//                           fontSize={16}
//                           className="edit-icon"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <Modal
//         title="Adicionar Usuário"
//         isOpen={showAddModal}
//         onClose={() => setShowAddModal(false)}
//         footer={
//           <Button
//             text="Salvar"
//             icon={faSave}
//              background="#009688"
//           hoverColor="#00796b"
//             borderRadius="5px"
//             onClick={() => handleSaveUser(currentUser)}
//           />
//         }
//       >
//         <UserForm
//           user={currentUser}
//           onCancel={() => setShowAddModal(false)}
//           onSave={handleSaveUser}
//         />
//       </Modal>

//       <Modal
//         title={`Editar Usuário: ${currentUser?.nome}`}
//         isOpen={showEditModal}
//         onClose={handleCancelEdit}
//         footer={
//           <Button
//             text="Salvar Alterações"
//             icon={faSave}
//               background="#009688"
//           hoverColor="#00796b"
//             borderRadius="5px"
//             onClick={() => handleSaveUser(currentUser)}
//           />
//         }
//       >
//         <UserForm
//           user={currentUser}
//           onCancel={handleCancelEdit}
//           onSave={handleSaveUser}
//         />
//       </Modal>
//     </div>
//   );
// }

// export default User;

import {
  faEdit,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/ui/Button/Button";
import SearchInput from "../../components/ui/SearchInput/SearchInput";
import { createEmptyUser } from "../../utils/functions";
import { dataFormat } from "../../utils/helpers/functions";
import UserForm from "./UserForm/UserForm";
import { UserDTO, UserRequest } from "./models/user";
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

      <div className="user-container-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Username</th>
              <th>Email</th>
              <th>Cadastro por</th>
              <th>Data Registro</th>
              <th>Atualizado por</th>
              <th>Data Última Atualização</th>
              <th>Ativo</th>
              <th>Bloqueado</th>
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
                <td>{user.email}</td>
                <td>{user.createdBy}</td>
                <td>{dataFormat(user.createdAt)}</td>
                <td>{user.updatedBy}</td>
                <td>{dataFormat(user.updatedAt)}</td>
                <td>
                  <div className="user-container-status">
                    <span
                      className={
                        user.enabled ? "dot-status" : "dot-status-non-active"
                      }
                    ></span>
                  </div>
                </td>
                <td>
                  <div className="user-container-status">
                    {user.accountNonLocked ? (
                      "Não bloqueado"
                    ) : (
                      "Bloqueado"
                    )}
                  </div>
                </td>
                <td>
                  <div className="user-container-status">
                    {!user.mfaEnabled ? (
                      "Não ativo"
                    ) : (
                      "Ativo"
                    )}
                  </div>
                </td>
                <td>
                  <div className="user-container-opcoes">
                    <div className="container-edit-icon">
                      <div onClick={() => handleEdit(user)}>
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



