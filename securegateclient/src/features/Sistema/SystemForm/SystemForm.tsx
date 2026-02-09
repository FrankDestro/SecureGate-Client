import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Edit } from "lucide-react";
import React, { useEffect, useState } from "react";
import Button from "../../../components/ui/Button/Button";
import { EnvironmentType } from "../constants/EnvironmentType";
import { useSystemForm } from "../hooks/useSystemForm";
import { SystemRequest } from "../models/systems";
import "./SystemForm.css";


type Props = {
  system: SystemRequest;
  onSave: (updatedSystem: SystemRequest) => void;
  onCancel: () => void;
  title: string;
};

const SystemForm: React.FC<Props> = ({ system, onSave, onCancel, title }) => {

  const [formData, setFormData] = useState<SystemRequest>({
    id: "",
    name: "",
    code: "",
    description: "",
    clientId: "",
    active: true,
    clientSecretHash: "",
    environmentType: ""
  });

  const { save, isLoading } = useSystemForm();
  const isCreating = !system.clientId;


  useEffect(() => {
    if (!isCreating) {
      setFormData({
        id: system.id,
        name: system.name || "",
        code: system.code || "",
        description: system.description || "",
        clientId: system.clientId || "",
        active: system.active ?? true,
        clientSecretHash: system.clientSecretHash || "",
        environmentType: system.environmentType || "DEV",
      });
    }
  }, [system, isCreating]);


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
    <div className="system-modal-overlay">
      <div className="system-modal">
        {/* HEADER */}
        <div className="system-modal-header">
          <div className="header-left">
            <Edit size={18} />
            <h3>{title}</h3>
          </div>
          <button className="close-button" onClick={onCancel}>
            ✕
          </button>
        </div>
        <form className="systemForm-container" onSubmit={handleSubmit}>
          <div className="system-modal-body">
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
            <div className="systemForm-section">
              <label>Ambiente :</label>
              <select
                className="systemForm-input"
                value={formData.environmentType}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    environmentType: e.target.value as EnvironmentType,
                  }))
                }
              >
                {Object.values(EnvironmentType).map((env) => (
                  <option key={env} value={env}>
                    {env}
                  </option>
                ))}
              </select>
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
          </div>
          {/* FOOTER */}
          <div className="system-modal-footer">
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

      </div>
    </div>
  );
};

export default SystemForm;

