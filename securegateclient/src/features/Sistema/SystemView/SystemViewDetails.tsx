import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {History, NotepadText, ShieldCheck, ShieldOff} from "lucide-react";
import Button from "../../../components/ui/Button/Button";
import {StatusBadge} from "../../../components/ui/StatusBadge/StatusBadge";
import * as functions from "../../../utils/helpers/functions";
import {systemDTO} from "../models/systems";
import {getEnvironmentIcon} from "../components/EnvironmentBadge/environmentBadge.icons";
import "./SystemViewDetails.css";

type Props = {
    system: systemDTO;
    onCancel: () => void;
};

const SystemViewDetails: React.FC<Props> = ({ system, onCancel }) => {
    return (
        <>
            <div className="system-modal-body">
                <div className="info-card">
                    <div className="card-header-title">
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
                                variant={system.active ? "success" : "danger"} />
                        </div>
                    </div>
                </div>


                <div className="info-card">
                    <div className="card-header-title">
                        <History size={18} />
                        <h4>Audit Dados</h4>
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
            <div className="system-modal-footer">
                <Button
                    text="Fechar"
                    icon={faXmark}
                    background="#009688"
                    hoverColor="#00796b"
                    borderRadius="5px"
                    fullWidth
                    onClick={onCancel} />
            </div>
        </>
    );

};

export default SystemViewDetails
