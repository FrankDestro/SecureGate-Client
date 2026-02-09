import { History, Monitor, NotepadText, ShieldCheck, ShieldOff } from "lucide-react";
import { systemDTO } from "../../models/systems";
import "./SystemViewDetails.css";
import * as functions from "../../../../utils/helpers/functions";
import { getEnvironmentIcon } from "../EnvironmentBadge/environmentBadge.icons";
import { StatusBadge } from "../../../../components/ui/StatusBadge/StatusBadge";
import Button from "../../../../components/ui/Button/Button";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type Props = {
    system: systemDTO;
    onCancel: () => void;
    title: string;
};

const SystemViewDetails: React.FC<Props> = ({ system, onCancel, title}) => {
    return (
        <div className="system-modal-overlay">
            <div className="system-modal">

                {/* HEADER */}
                <div className="system-modal-header">
                    <div className="header-left">
                        <Monitor size={18} />
                        <h3>{title}</h3>
                    </div>

                    <button className="close-button" onClick={onCancel}>
                        ✕
                    </button>
                </div>

                {/* CONTEÚDO */}
                <div className="system-modal-body">

                    {/* CARD - INFORMAÇÕES DO SISTEMA */}
                    <div className="info-card">
                        <div className="card-header">
                            <NotepadText size={18} />
                            <h4>Informações do Sistema</h4>
                        </div>

                        <div className="card-grid">
                            <div className="info-item">
                                <span>ID</span>
                                <strong>{system.id}</strong>
                            </div>

                            <div className="info-item">
                                <span>Nome</span>
                                <strong>{system.name}</strong>
                            </div>

                            <div className="info-item">
                                <span>Código</span>
                                <strong>{system.code}</strong>
                            </div>

                            <div className="info-item">
                                <span>Descrição</span>
                                <strong>{system.description}</strong>
                            </div>

                            <div className="info-item">
                                <span>Client ID</span>
                                <strong>{system.clientId}</strong>
                            </div>

                            <div className="info-item">
                                <span>Client Secret</span>
                                <strong>••••••••••••</strong>
                            </div>

                            <div className="info-item" style={{ width: "100px" }}>
                                <span>Ambiente</span>
                                <span
                                    style={functions.setBadgeStyleByEnvironmentType(
                                        system.environmentType
                                    )}
                                >
                                    {getEnvironmentIcon(system.environmentType)}
                                    {system.environmentType}
                                </span>
                            </div>
                            <div className="info-item" style={{ width: "100px" }}>
                                <span>Status</span>
                                <StatusBadge
                                    icon={system.active ? <ShieldCheck /> : <ShieldOff />}
                                    label={system.active ? "Ativo" : "Não ativo"}
                                    variant={system.active ? "success" : "danger"}
                                />
                            </div>
                        </div>
                    </div>

                    {/* CARD - METADADOS */}
                    <div className="info-card">
                        <div className="card-header">
                            <History size={18} />
                            <h4>Metadados</h4>
                        </div>

                        <div className="card-grid">
                            <div className="info-item">
                                <span>Criado em</span>
                                <strong>{system.createdAt}</strong>
                            </div>

                            <div className="info-item">
                                <span>Criado por</span>
                                <strong>{system.createdBy}</strong>
                            </div>

                            <div className="info-item">
                                <span>Atualizado em</span>
                                <strong>{system.updatedAt}</strong>
                            </div>

                            <div className="info-item">
                                <span>Atualizado por</span>
                                <strong>{system.updatedBy}</strong>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="system-modal-footer">
                    <Button
                        text="Fechar"
                        icon={faXmark}
                        background="#009688"
                        hoverColor="#00796b"
                        borderRadius="5px"
                        fullWidth
                        onClick={onCancel}
                    />
                </div>
            </div>
        </div>
    );

};

export default SystemViewDetails
