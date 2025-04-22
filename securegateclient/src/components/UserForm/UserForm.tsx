import { useState, useEffect } from "react";
import "./UserForm.css";
import { UserDTO } from "../../models/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFolderOpen } from "@fortawesome/free-solid-svg-icons"; // Importando os ícones

interface UserFormProps {
  user: UserDTO;
  onCancel: () => void;
  onSave: (user: any) => void;
}

function UserForm({ user, onCancel, onSave }: UserFormProps) {
  const [formData, setFormData] = useState<any>(user);
  const [expandedSystems, setExpandedSystems] = useState<any>({}); // Estado para controle de expansão/colapso

  // Atualiza os dados do formulário sempre que o usuário for alterado
  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  // Função para alternar entre expandir e colapsar um sistema
  const toggleSystemExpansion = (systemKey: string) => {
    setExpandedSystems((prevState: any) => {
      const updatedState = {
        ...prevState,
        [systemKey]: !prevState[systemKey],
      };
      console.log(updatedState); // Verificando o estado atualizado
      return updatedState;
    });
  };

  // Função para renderizar os sistemas e suas informações
  const renderSystemsTree = (systems: any) => {
    return Object.entries(systems).map(([key, system]) => (
      <div key={key} style={{ marginLeft: "20px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            onClick={() => toggleSystemExpansion(key)}
            style={{
              background: "none",
              padding: "0",
              cursor: "pointer",
              marginRight: "10px",
              fontSize: "20px",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={expandedSystems[key] ? faFolderOpen : faFolder} color="gold"
            />
          </div>
          <strong>{key}</strong>
        </div>
        {expandedSystems[key] && (
          <div style={{ marginLeft: "20px" }}>
            <p>
              <strong>Roles:</strong> {system.roles.join(", ")}
            </p>
            <p>
              <strong>Permissions:</strong> {system.permissions.join(", ")}
            </p>
          </div>
        )}
      </div>
    ));
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.name}
          onChange={handleChange}
          placeholder="Digite o nome"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Digite o username"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.username}
          onChange={handleChange}
          placeholder="Digite o email"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="ativo">Ativo</label>
        <select
          id="ativo"
          name="ativo"
          value={formData.ativo}
          onChange={handleChange}
        >
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </select>
      </div>

      <div className="form-group">
        <label>Sistemas</label>
        <div>{renderSystemsTree(formData.systems)}</div>{" "}
        {/* Exibe os sistemas como árvore */}
      </div>
    </form>
  );
}

export default UserForm;
