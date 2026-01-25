import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Button from "../../../components/ui/Button/Button";
import { useSystemForm } from "../hooks/useSystemForm";
import { SystemRequest } from "../models/systems";
import "./SystemForm.css";

type Props = {
  system: SystemRequest;
  onSave: (updatedSystem: SystemRequest) => void;
  onCancel: () => void;
};

const SystemForm: React.FC<Props> = ({ system, onSave, onCancel }) => {
  const [formData, setFormData] = useState<SystemRequest>({
    name: "",
    code: "",
    description: "",
    clientId: "",
    clientSecretHash: "",
    active: false,
  });

  const { save, isLoading } = useSystemForm();
  const isCreating = !system.clientId;

  useEffect(() => {
    setFormData(system);
  }, [system]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await save(formData, isCreating);
    if (success) onSave(formData);
  };

  return (
    <form className="systemForm-container" onSubmit={handleSubmit}>
      <div className="systemForm-section">
        <label>Nome:</label>
        <input
          className="systemForm-input"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="systemForm-section">
        <label>Código:</label>
        <input
          className="systemForm-input"
          name="code"
          value={formData.code}
          onChange={handleChange}
        />
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
        <label>Client ID:</label>
        <input
          className="systemForm-input"
          name="clientId"
          value={formData.clientId}
          onChange={handleChange}
        />
      </div>

      <div className="systemForm-section">
        <label>Client Secret:</label>
        <input
          className="systemForm-input"
          name="clientSecretHash"
          value={formData.clientSecretHash}
          onChange={handleChange}
        />
      </div>

      {!isCreating && (
        <div className="systemForm-section">
          <label>Status:</label>
          <select
            className="systemForm-input"
            value={formData.active ? "true" : "false"}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                active: e.target.value === "true",
              }))
            }
          >
            <option value="true">Ativo</option>
            <option value="false">Não Ativo</option>
          </select>
        </div>
      )}

      <div className="container-buttons">
        <Button
          text={isCreating ? "Salvar" : "Salvar Alterações"}
          icon={faCheck}
          background="#009688"
          hoverColor="#00796b"
          borderRadius="5px"
          fullWidth
          type="submit"
          disabled={isLoading}
        />

        <Button
          text="Cancelar"
          icon={faXmark}
          background="#009688"
          hoverColor="#00796b"
          borderRadius="5px"
          fullWidth
          onClick={onCancel}
        />
      </div>
    </form>
  );
};

export default SystemForm;

