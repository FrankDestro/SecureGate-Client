import {
    DeleteOutlined,
    LockOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Col, Row } from 'antd';
import { NotebookPen, ShieldPlus, ShieldUser } from 'lucide-react';
import './AssociationSystemPerfis.css';
import Button from '../../components/ui/Button/Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function AssociationSystemPerfis() {
    return (
        <div className="page">
            {/* HEADER */}
            <div className="page-header">
                <div>
                    <h1>Sistema | Perfis</h1>
                    <p>Gerencie os perfis disponíveis para este sistema</p>
                </div>

                <select className="system-select">
                    <option>Selecionar um sistema</option>
                    <option>Help Desk System</option>
                </select>
            </div>


            <Row style={{ marginBottom: 16 }}>
                <Col span={15} offset={0}>
                    {/* PERFIS */}
                    <div className="card">
                        <div className="card-header">
                            <h2>Perfis do Sistema</h2>
                            <span className="card-subtitle">
                                Perfis atualmente disponíveis neste sistema
                            </span>
                        </div>

                        <div className="profile-grid">
                            {/* ADMIN */}
                            <div className="profile-card">
                                <div className="profile-title">
                                    <ShieldUser className="icon admin" />
                                    <strong>ROLE_ADMIN</strong>
                                </div>

                                <span className="profile-desc">
                                    Administrador do sistema
                                </span>

                                <div className="profile-info">
                                    <UserOutlined />
                                    <span>Usuários associados: 12</span>
                                </div>

                                <button className="btn disabled">
                                    <LockOutlined /> Não pode remover
                                </button>
                            </div>

                            {/* OPERATOR */}
                            <div className="profile-card">
                                <div className="profile-title">
                                    <UserOutlined className="icon operator" />
                                    <strong>ROLE_OPERATOR</strong>
                                </div>

                                <span className="profile-desc">
                                    Perfil padrão
                                </span>

                                <div className="profile-info">
                                    <UserOutlined />
                                    <span>Usuários associados: 0</span>
                                </div>

                                <button className="btn danger">
                                    <DeleteOutlined /> Remover do sistema
                                </button>
                            </div>

                            <div className="container-new-perfis">
                                <div className="profile-card new">
                                    <span className="badge-new">Novo</span>

                                    <div className="profile-title">
                                        <UserOutlined className="icon operator" />
                                        <strong>ROLE_OPERATOR</strong>
                                    </div>

                                    <span className="profile-desc">
                                        Perfil padrão
                                    </span>

                                    <div className="profile-info">
                                        <UserOutlined />
                                        <span>Usuários associados: 0</span>
                                    </div>

                                    <button className="btn danger">
                                        <DeleteOutlined /> Remover do sistema
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </Col>
                <Col span={8} offset={1}>
                    <div className="card summary">
                        <div className='summary-title'>
                            <NotebookPen />
                            <h2>Resumo do Sistema</h2>
                        </div>
                        <ul>
                            <li><strong>Sistema:</strong> Help Desk System</li>
                            <li><strong>Perfis:</strong> 3</li>
                            <li><strong>Usuários afetados:</strong> 62</li>
                        </ul>
                        <Button
                            text="Salvar Alterações"
                            icon={faPlus}
                            background="#009688"
                            hoverColor="#00796b"
                            borderRadius="5px"
                            width='470px'
                        />
                    </div>
                </Col>
            </Row>

            <Row style={{ marginBottom: 16 }}>
                <Col span={15} offset={0}>
                    {/* ADICIONAR PERFIL */}
                    <div className="card">
                        <div className='add-perfil-title'>
                            <ShieldPlus />
                            <h2>Adicionar Perfil ao Sistema</h2>
                        </div>
                        <div className="add-grid">
                            <div>
                                <label className="label-title">Criar novo perfil</label>
                                <input placeholder="ROLE_SUPERVISOR" />
                                <Button
                                    text="Criar e associar"
                                    icon={faPlus}
                                    background="#009688"
                                    hoverColor="#00796b"
                                    borderRadius="5px"
                                    width='100%'
                                />
                            </div>
                            <div>
                                <label className="label-title">Perfil existente</label>
                                <select>
                                    <option>Selecione um perfil</option>
                                </select>

                                <Button
                                    text="Associar perfils"
                                    icon={faPlus}
                                    background="#009688"
                                    hoverColor="#00796b"
                                    borderRadius="5px"
                                    width='100%'
                                />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
