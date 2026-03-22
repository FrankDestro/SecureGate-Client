import {faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import Modal from "../../../components/Modal/Modal";
import Button from "../../../components/ui/Button/Button";
import {EnvironmentType} from "../constants/EnvironmentType";
import {useSystemForm} from "../hooks/useSystemForm";
import {SystemRequest} from "../models/systems";
import "./SystemForm.css";
import {AlertTriangle} from "lucide-react";

type Props = {
  system: SystemRequest;
  onSave: (updatedSystem: SystemRequest) => void;
  onCancel: () => void;
};

const SystemForm: React.FC<Props> = ({ system, onSave, onCancel }) => {

  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const [generatedSecret, setGeneratedSecret] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);


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

    if (isCreating) {
      setGeneratedSecret(formData.clientSecretHash);
      setShowInfoModal(true);
    } else {
      const success = await save(formData, false);

      if(system.clientSecretHash != formData.clientSecretHash) {
        setShowInfoModal(true);
      }

      if (success) {
        onSave(formData);
      }
    }
  };

  function handleCancel() {
    setShowInfoModal(false)
    setGeneratedSecret(null);
  }

  const handleConfirmSave = async () => {
    const success = await save(formData, isCreating);
    if (success) {
      setGeneratedSecret(null)
      setShowInfoModal(false);
      onSave(formData);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedSecret ?? "");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };


  return (
    <>
      <form className="systemForm-container" onSubmit={handleSubmit}>
        <div className="system-modal-body">
          <div className="systemForm-section">
            <label>Nome:</label>
            <input
              className="systemForm-input"
              name="name"
              value={formData.name}
              onChange={handleChange} />
          </div>
          <div className="systemForm-section">
            <label>Código:</label>
            <input
              className="systemForm-input"
              name="code"
              value={formData.code}
              onChange={handleChange} />
          </div>
          <div className="systemForm-section">
            <label>Descrição:</label>
            <textarea
              className="systemForm-textarea"
              name="description"
              value={formData.description}
              onChange={handleChange} />
          </div>
          <div className="systemForm-section">
            <label>Client ID:</label>
            <input
              className="systemForm-input"
              name="clientId"
              value={formData.clientId}
              onChange={handleChange} />
          </div>
          <div className="systemForm-section">
            <label>Client Secret:</label>
            <input
              className="systemForm-input"
              name="clientSecretHash"
              value={formData.clientSecretHash}
              onChange={handleChange} />
          </div>
          <div className="systemForm-section">
            <label>Ambiente :</label>
            <select
              className="systemForm-input"
              value={formData.environmentType}
              onChange={(e) => setFormData((prev) => ({
                ...prev,
                environmentType: e.target.value as EnvironmentType,
              }))}
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
                onChange={(e) => setFormData((prev) => ({
                  ...prev,
                  active: e.target.value === "true",
                }))}
              >
                <option value="true">Ativo</option>
                <option value="false">Não Ativo</option>
              </select>
            </div>
          )}
        </div>
        <div className="system-modal-footer">
          <Button
            text={isCreating ? "Salvar" : "Salvar Alterações"}
            icon={faCheck}
            background="#009688"
            hoverColor="#00796b"
            borderRadius="5px"
            fullWidth
            type="submit"
            disabled={isLoading} />
          <Button
            text="Cancelar"
            icon={faXmark}
            background="#009688"
            hoverColor="#00796b"
            borderRadius="5px"
            fullWidth
            onClick={onCancel} />
        </div>
      </form>

      <Modal
        title="Confirmação"
        isOpen={showInfoModal}
        onClose={handleCancel}
      >
        <section className="system-modal-body">
          <div className="container-title-content">
           <AlertTriangle size={20} className="text-yellow-500" />

            <p>
              Copie o client-secret agora. Ele não será exibido novamente.
            </p>
          </div>

          <div className="secret-container">
            <input
              value={generatedSecret ?? ""}
              readOnly
              onClick={(e) => e.currentTarget.select()}
            />
            <Button
              text="Copiar"
              icon={faCheck}
              background="#009688"
              hoverColor="#00796b"
              borderRadius="5px"
              onClick={handleCopy}

              disabled={isLoading}
              fullWidth
            />
            {copied && (
              <span className="tooltip">
                Copiado!
              </span>
            )}
          </div>
        </section>

        <footer className="system-modal-footer">
          <Button
            text="Confirmar"
            icon={faCheck}
            background="#009688"
            hoverColor="#00796b"
            borderRadius="5px"
            onClick={handleConfirmSave}
            disabled={isLoading}
            fullWidth />
          <Button
            text="Cancelar"
            icon={faXmark}
            background="#9e9e9e"
            hoverColor="#757575"
            borderRadius="5px"
            onClick={handleCancel}
            fullWidth />
        </footer>
      </Modal>
    </>
  );
};

export default SystemForm;

