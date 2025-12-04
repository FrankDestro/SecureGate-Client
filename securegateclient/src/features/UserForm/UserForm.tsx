import { useState, useEffect } from "react";
import "./UserForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { UserDTO } from "../../models/user/user";

interface UserSystem {
  roles?: string[];
  permissions?: string[];
}

interface UserFormProps {
  user: UserDTO;
  onCancel: () => void;
  onSave: (user: any) => void;
}

function UserForm({ user, onCancel, onSave }: UserFormProps) {
  const [formData, setFormData] = useState<any>({
    ...user,
    systems: user.systems ?? {},
  });

  const [expandedSystems, setExpandedSystems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setFormData({ ...user, systems: user.systems ?? {} });
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

  const toggleSystemExpansion = (systemKey: string) => {
    setExpandedSystems((prevState) => ({
      ...prevState,
      [systemKey]: !prevState[systemKey],
    }));
  };

  const renderSystemsTree = (systems: Record<string, UserSystem>) => {
    if (!systems || typeof systems !== "object") return null;

    return Object.entries(systems).map(([key, system]) => (
      <div key={key} className="tree-node">
        <div className="tree-toggle" onClick={() => toggleSystemExpansion(key)}>
          <FontAwesomeIcon
            icon={expandedSystems[key] ? faFolderOpen : faFolder}
            color="gold"
          />
          <span className="tree-label">{key}</span>
        </div>
        {expandedSystems[key] && (
          <div className="tree-children">
            <div className="tree-branch">
              └── <strong>Roles:</strong>
              <div className="tree-subbranch">
                {system.roles?.map((role, index) => (
                  <div key={index}>└──── {role}</div>
                ))}
              </div>
            </div>
            <div className="tree-branch">
              └── <strong>Permissions:</strong>
              <div className="tree-subbranch">
                {system.permissions?.map((perm, index) => (
                  <div key={index}>└──── {perm}</div>
                ))}
              </div>
            </div>
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
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Digite o nome"
          required
        />
      </div>

      {/* <div className="form-group">
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
      </div> */}

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Digite o email"
          required
        />
      </div>

      {/* <div className="form-group">
        <label htmlFor="ativo">Ativo</label>
        <select
          id="ativo"
          name="ativo"
          value={formData.ativo}
          onChange={handleChange}
        >
          <option value="true">Sim</option>
          <option value="false">Não</option>
        </select>
      </div> */}

      {/* <div className="form-group">
        <label className="teste">Sistemas</label>
        <div className="container-content-render-tree-systems">
          {renderSystemsTree(formData.systems)}
        </div>
      </div> */}
    </form>
  );
}

export default UserForm;
