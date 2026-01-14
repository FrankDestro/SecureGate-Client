import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from "../../components/Button/Button";
import { SystemRequest } from "../../models/system/systems";
import * as systemService from "../../services/system-service";
import "./SystemForm.css";

type Props = {
  system?: SystemRequest;
  onSave: (updatedSystem: SystemRequest) => void;
  onCancel: (info: boolean) => void;
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
  const isCreating = !system?.clientId;

  useEffect(() => {
    if (system) {
      setFormData({
        ...system,
      });
    }
  }, [system]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const requestBody: SystemRequest = {
      id: system?.id,
      ...formData,
    };

    if (isCreating) {
      systemService
        .addAuthClient(requestBody)
        .then(() => {
          toast.success("Sistema cadastrado com sucesso!");
          onSave(formData);
        })
        .catch(() => {
          toast.error("Erro ao cadastrar Sistema.");
        });
    } else {
      systemService
        .UpdateAuthClient(requestBody)
        .then(() => {
          toast.success("Sistema atualizado com sucesso!");
          onSave(formData);
        })
        .catch(() => {
          toast.error("Erro ao atualizar Sistema.");
        });
    };
  }

  const handleCancel = () => {
    onCancel(false);
  };

  return (
    <form id="systemForm" className="systemForm-container" onSubmit={handleSubmit}>
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
        <label>Cógido:</label>
        <input
          className="systemForm-input"
          type="text"
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
          type="text"
          value={formData.clientId}
          onChange={handleChange}
        />
      </div>

      <div className="systemForm-section">
        <label>Client Secret:</label>
        <div className="systemForm-secret-field">
          <input
            className="systemForm-input"
            type="text"
            name="clientSecretHash"
            value={formData.clientSecretHash}
            onChange={handleChange}
          />
        </div>
      </div>

      {!isCreating && (
        <div className="systemForm-section">
          <label>Status:</label>
          <select
            name="active"
            value={formData.active ? "true" : "false"}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                active: e.target.value === "true",
              }))
            }
            className="systemForm-input"
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
          form="systemForm"
          background="#009688"
          hoverColor="#00796b"
          borderRadius="5px"
          fullWidth={true}
          type="submit"
        />

        <Button
          text="Cancelar"
          icon={faXmark}
          background="#009688"
          hoverColor="#00796b"
          borderRadius="5px"
          fullWidth={true}
          onClick={handleCancel}
        />
      </div>
    </form>
  );
};

export default SystemForm;
