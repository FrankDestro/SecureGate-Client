// import {
//   faEdit,
//   faPlus
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";
// import Modal from "../../components/Modal/Modal";
// import Button from "../../components/ui/Button/Button";
// import SearchInput from "../../components/ui/SearchInput/SearchInput";
// import { systemDTO } from "../Sistema/models/systems";
// import { createEmptySystem } from "../../utils/helpers/functions";
// import SystemForm from "../SystemForm/SystemForm";
// import "./System.css";

// type Props = {
//   onSearch: (...args: string[]) => void;
//   systems: systemDTO[];
// };

// function System({ onSearch, systems }: Props) {

//   // ESTADOS
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [currentSystem, setCurrentSystem] = useState<any>(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   // ABRIR MODAL
//   const handleEdit = (system: any) => {
//     setCurrentSystem(system);
//     setShowEditModal(true);
//   };

//   const handleAdd = () => {
//     setCurrentSystem(createEmptySystem());
//     setShowAddModal(true);
//   };

//   // FUNÇÕES PAI
//   const handleSaveSystem = (updatedSystem: any) => {
//     console.log("Sistema atualizado:", updatedSystem);
//     setShowEditModal(false);
//   };

//   const handleNewSaveSystem = (updatedSystem: any) => {
//     console.log("Sistema adicionado:", updatedSystem);
//     setShowAddModal(false); // FECHA MODAL
//   };

//   const handleCancel = (info: boolean) => {
//     setShowAddModal(info);
//     setShowEditModal(info);
//   };

//   // FUNÇÃO DE BUSCA RESULTADOS
//   function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
//     event.preventDefault();
//     onSearch(searchTerm);
//   }

//   return (
//     <div className="system-container-main">
//       <div className="title-modules-system">
//         <h1>Sistemas</h1>
//         <Button
//           text="Adicionar Sistema"
//           icon={faPlus}
//           background="#009688"
//           hoverColor="#00796b"
//           borderRadius="5px"
//           onClick={handleAdd}
//         />
//       </div>

//       <form onSubmit={handleSubmit}>
//         <div style={{ paddingTop: "20px" }}>
//           <SearchInput
//             label="Buscar sistema"
//             width="100%"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </form>
//       <div className="system-container-table">
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Nome</th>
//               <th>Código</th>
//               <th>Descrição</th>
//               <th>Client ID</th>
//               <th>Client Secret</th>
//               <th>Data Registro</th>
//               <th>Registrado por</th>
//               <th>Data Última Atualização</th>
//               <th>Atualziado por</th>
//               <th>Ativo</th>
//               <th>Ações</th>
//             </tr>
//           </thead>
//           <tbody>
//             {systems.map((system) => (
//               <tr key={system.id}>
//                 <td>{system.id}</td>
//                 <td>{system.name}</td>
//                 <td>{system.code}</td>
//                 <td>{system.description}</td>
//                 <td>{system.clientId}</td>
//                 <td>{system.clientSecretHash}</td>
//                 <td>{system.createdAt}</td>
//                 <td>{system.createdBy}</td>
//                 <td>{system.updatedAt}</td>
//                 <td>{system.updatedBy}</td>
//                 <td>
//                   <div className="system-container-status">
//                     <span
//                       className={
//                         system.active ? "dot-status" : "dot-status-non-active"
//                       }
//                     ></span>
//                     <span>{system.active ? "SIM" : "NÃO"}</span>
//                   </div>
//                 </td>
//                 <td>
//                   <div className="system-container-opcoes">
//                     <div className="container-edit-icon">
//                       <div onClick={() => handleEdit(system)}>
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

//       {/* MODAIS */}

//       {/* ADICIONAR  */}
//       <Modal
//         title="Adicionar um Sistema"
//         isOpen={showAddModal}
//         onClose={() => setShowAddModal(false)}>
//         <SystemForm
//           system={currentSystem!}
//           onSave={handleNewSaveSystem}
//           onCancel={handleCancel}
//         />
//       </Modal>

//       {/* EDITAR  */}
//       <Modal
//         title={`Editar Sistema: ${currentSystem?.name}`}
//         isOpen={showEditModal}
//         onClose={() => setShowEditModal(false)}>
//         <SystemForm
//           system={currentSystem}
//           onSave={handleSaveSystem}
//           onCancel={handleCancel}
//         />
//       </Modal>
//     </div>
//   );
// }

// export default System;
