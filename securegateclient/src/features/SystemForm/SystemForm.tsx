import React, { useState, useEffect } from "react";
import "./SystemForm.css";

type System = {
  id?: string;
  name: string;
  clientId: string;
  clientSecret: string;
  description: string;
  active: boolean;
  createdAt?: string;
  updatedAt?: string;
  roles: string[];
  permissions: string[];
};

type Props = {
  system?: System; // Permitir que o `system` seja opcional, para o caso de criação de novo
  onCancel: () => void;
  onSave: (updatedSystem: System) => void;
};

const availableRoles = ["ADMIN", "SUPERVISOR", "USER"];
const availablePermissions = [
  "VIEW_DASHBOARD",
  "MANAGE_USERS",
  "EDIT_SETTINGS",
];

const SystemForm: React.FC<Props> = ({ system, onCancel, onSave }) => {
  const [formData, setFormData] = useState<System>({
    id: "",
    name: "",
    clientId: "",
    clientSecret: "",
    description: "",
    active: true,
    roles: [],
    permissions: [],
  });

  useEffect(() => {
    if (system) {
      setFormData({
        ...system,
        roles: system.roles ?? [],
        permissions: system.permissions ?? [],
      });
    }
  }, [system]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleRole = (role: string) => {
    setFormData((prev) => ({
      ...prev,
      roles: prev.roles.includes(role)
        ? prev.roles.filter((r) => r !== role)
        : [...prev.roles, role],
    }));
  };

  const togglePermission = (perm: string) => {
    setFormData((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(perm)
        ? prev.permissions.filter((p) => p !== perm)
        : [...prev.permissions, perm],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form className="systemForm-container" onSubmit={handleSubmit}>
      <div className="systemForm-section">
        <label>Nome:</label>
        <input
          className="systemForm-input"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="systemForm-section">
        <label>Client ID:</label>
        <input
          className="systemForm-input"
          type="text"
          value={formData.clientId}
          readOnly
        />
      </div>

      <div className="systemForm-section">
        <label>Client Secret:</label>
        <div className="systemForm-secret-field">
          <input
            className="systemForm-input"
            type="text"
            value={formData.clientSecret}
            readOnly
          />
        </div>
      </div>

      <div className="systemForm-section">
        <label>Descrição:</label>
        <textarea
          className="systemForm-textarea"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div className="systemForm-section">
        <label>Roles:</label>
        <div className="systemForm-checkbox-group">
          {availableRoles.map((role) => (
            <label key={role}>
              <input
                type="checkbox"
                checked={formData.roles?.includes(role) ?? false}
                onChange={() => toggleRole(role)}
              />
              {role}
            </label>
          ))}
        </div>
      </div>

      <div className="systemForm-section">
        <label>Permissões:</label>
        <div className="systemForm-checkbox-group">
          {availablePermissions.map((perm) => (
            <label key={perm}>
              <input
                type="checkbox"
                checked={formData.permissions?.includes(perm) ?? false}
                onChange={() => togglePermission(perm)}
              />
              {perm}
            </label>
          ))}
        </div>
      </div>
    </form>
  );
};

export default SystemForm;
