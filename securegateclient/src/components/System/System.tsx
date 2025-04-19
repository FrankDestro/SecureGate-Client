import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import SearchInput from "../SearchInput/SearchInput";
import "./System.css";
import Pagination from "../Pagination/Pagination";

function System() {
  return (
    <div className="system-container-main">
      <div className="system-container-title">
        <h1>Sistemas</h1>
        <Button
          text="Adicionar Sistema"
          icon={faPlus}
          background="#1976d2"
          hoverColor="#1976d2"
          borderRadius="5px"
        />
      </div>
      <SearchInput label="Buscar sistema" width="100%" />
      <div className="system-container-table">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Client ID</th>
              <th>Client Secret</th>
              <th>Descrição</th>
              <th>Ativo</th>
              <th>Data Registro</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sistema Financeiro</td>
              <td>fin-123456</td>
              <td>9f8e7d6c5b4a</td>
              <td>Integração com sistema de pagamentos</td>
              <td>
                <div className="system-container-status">
                  <span className="dot-status"></span>
                  <span>SIM</span>
                </div>
              </td>
              <td>2024-12-01 14:22</td>
              <td>
                <div className="system-container-opcoes">
                  <FontAwesomeIcon icon={faTrash} fontSize={16} color="gray" />
                  <FontAwesomeIcon icon={faEdit} fontSize={16} color="gray" />
                </div>
              </td>
            </tr>
            <tr>
              <td>Sistema de Estoque</td>
              <td>estoque-78910</td>
              <td>a1b2c3d4e5f6</td>
              <td>Controle de inventário e movimentações</td>
              <td>
                <div className="system-container-status">
                  <span className="dot-status-non-active"></span>
                  <span>NÃO</span>
                </div>
              </td>
              <td>2023-08-21 09:45</td>
              <td>
                <div className="system-container-opcoes">
                  <FontAwesomeIcon icon={faTrash} fontSize={16} color="gray" />
                  <FontAwesomeIcon icon={faEdit} fontSize={16} color="gray" />
                </div>
              </td>
            </tr>
            <tr>
              <td>Sistema de Relatórios</td>
              <td>report-456789</td>
              <td>z9y8x7w6v5u4</td>
              <td>Geração de relatórios gerenciais</td>
              <td>
                <div className="system-container-status">
                  <span className="dot-status"></span>
                  <span>SIM</span>
                </div>
              </td>
              <td>2025-01-10 11:12</td>
              <td>
                <div className="system-container-opcoes">
                  <FontAwesomeIcon icon={faTrash} fontSize={16} color="gray" />
                  <FontAwesomeIcon icon={faEdit} fontSize={16} color="gray" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination totalItems={120} itemsPerPageOptions={[10, 20, 50]} />
      </div>
    </div>
  );
}

export default System;
