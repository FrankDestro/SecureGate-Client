import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import SearchInput from "../SearchInput/SearchInput";
import "./User.css";
import Pagination from "../Pagination/Pagination";

function User() {
  return (
    <div className="user-container-main">
      <div className="user-container-title">
        <h1>Usuários</h1>
        <Button
          text="Adicionar Usuário"
          icon={faPlus}
          background="#1976d2"
          hoverColor="#1976d2"
          borderRadius="5px"
        />
      </div>
      <SearchInput label="Buscar usuário" width="100%" />
      <div className="user-container-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Data Criação</th>
              <th>Ativo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>
                <div className="user-container-status">
                  <span className="dot-status"></span>
                  <span>SIM</span>
                </div>
              </td>
              <td>
                <div className="user-container-opcoes">
                  <FontAwesomeIcon icon={faTrash} fontSize={16} color="gray" />
                  <FontAwesomeIcon icon={faEdit} fontSize={16} color="gray" />
                </div>
              </td>
            </tr>
            <tr>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>
                <div className="user-container-status">
                  <span className="dot-status"></span>
                  <span>SIM</span>
                </div>
              </td>
              <td>
                <div className="user-container-opcoes">
                  <FontAwesomeIcon icon={faTrash} fontSize={16} color="gray" />
                  <FontAwesomeIcon icon={faEdit} fontSize={16} color="gray" />
                </div>
              </td>
            </tr>
            <tr>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>
                <div className="user-container-status">
                  <span className="dot-status"></span>
                  <span>SIM</span>
                </div>
              </td>
              <td>
                <div className="user-container-opcoes">
                  <FontAwesomeIcon icon={faTrash} fontSize={16} color="gray" />
                  <FontAwesomeIcon icon={faEdit} fontSize={16} color="gray" />
                </div>
              </td>
            </tr>
            <tr>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>
                <div className="user-container-status">
                  <span className="dot-status"></span>
                  <span>SIM</span>
                </div>
              </td>
              <td>
                <div className="user-container-opcoes">
                  <FontAwesomeIcon icon={faTrash} fontSize={16} color="gray" />
                  <FontAwesomeIcon icon={faEdit} fontSize={16} color="gray" />
                </div>
              </td>
            </tr>
            <tr>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>
                <div className="user-container-status">
                  <span className="dot-status"></span>
                  <span>SIM</span>
                </div>
              </td>
              <td>
                <div className="user-container-opcoes">
                  <FontAwesomeIcon icon={faTrash} fontSize={16} color="gray" />
                  <FontAwesomeIcon icon={faEdit} fontSize={16} color="gray" />
                </div>
              </td>
            </tr>
            <tr>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>
                <div className="user-container-status">
                  <span className="dot-status-non-active"></span>
                  <span>NÃO</span>
                </div>
              </td>
              <td>
                <div className="user-container-opcoes">
                  <FontAwesomeIcon icon={faTrash} fontSize={16} color="gray" />
                  <FontAwesomeIcon icon={faEdit} fontSize={16} color="gray" />
                </div>
              </td>
            </tr>
            <tr>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>
                <div className="user-container-status">
                  <span className="dot-status-non-active"></span>
                  <span>NÃO</span>
                </div>
              </td>
              <td>
                <div className="user-container-opcoes">
                  <FontAwesomeIcon icon={faTrash} fontSize={16} color="gray" />
                  <FontAwesomeIcon icon={faEdit} fontSize={16} color="gray" />
                </div>
              </td>
            </tr>
            <tr>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>
                <div className="user-container-status">
                  <span className="dot-status-non-active"></span>
                  <span>NÃO</span>
                </div>
              </td>
              <td>
                <div className="user-container-opcoes">
                  <FontAwesomeIcon icon={faTrash} fontSize={16} color="gray" />
                  <FontAwesomeIcon icon={faEdit} fontSize={16} color="gray" />
                </div>
              </td>
            </tr>
            <tr>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>
                <div className="user-container-status">
                  <span className="dot-status-non-active"></span>
                  <span>NÃO</span>
                </div>
              </td>
              <td>
                <div className="user-container-opcoes">
                  <FontAwesomeIcon icon={faTrash} fontSize={16} color="gray" />
                  <FontAwesomeIcon icon={faEdit} fontSize={16} color="gray" />
                </div>
              </td>
            </tr>
            <tr>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>
                <div className="user-container-status">
                  <span className="dot-status-non-active"></span>
                  <span>NÃO</span>
                </div>
              </td>
              <td>
                <div className="user-container-opcoes">
                  <FontAwesomeIcon icon={faTrash} fontSize={16} color="gray" />
                  <FontAwesomeIcon icon={faEdit} fontSize={16} color="gray" />
                </div>
              </td>
            </tr>
            <tr>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>
                <div className="user-container-status">
                  <span className="dot-status-non-active"></span>
                  <span>NÃO</span>
                </div>
              </td>
              <td>
                <div className="user-container-opcoes">
                  <FontAwesomeIcon icon={faTrash} fontSize={16} color="gray" />
                  <FontAwesomeIcon icon={faEdit} fontSize={16} color="gray" />
                </div>
              </td>
            </tr>
            <tr>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>
                <div className="user-container-status">
                  <span className="dot-status-non-active"></span>
                  <span>NÃO</span>
                </div>
              </td>
              <td>
                <div className="user-container-opcoes">
                  <FontAwesomeIcon icon={faTrash} fontSize={16} color="gray" />
                  <FontAwesomeIcon icon={faEdit} fontSize={16} color="gray" />
                </div>
              </td>
            </tr>
            <tr>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>
                <div className="user-container-status">
                  <span className="dot-status-non-active"></span>
                  <span>NÃO</span>
                </div>
              </td>
              <td>
                <div className="user-container-opcoes">
                  <FontAwesomeIcon icon={faTrash} fontSize={16} color="gray" />
                  <FontAwesomeIcon icon={faEdit} fontSize={16} color="gray" />
                </div>
              </td>
            </tr>
            <tr>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>
                <div className="user-container-status">
                  <span className="dot-status-non-active"></span>
                  <span>NÃO</span>
                </div>
              </td>
              <td>
                <div className="user-container-opcoes">
                  <FontAwesomeIcon icon={faTrash} fontSize={16} color="gray" />
                  <FontAwesomeIcon icon={faEdit} fontSize={16} color="gray" />
                </div>
              </td>
            </tr>
            <tr>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>
                <div className="user-container-status">
                  <span className="dot-status-non-active"></span>
                  <span>NÃO</span>
                </div>
              </td>
              <td>
                <div className="user-container-opcoes">
                  <FontAwesomeIcon icon={faTrash} fontSize={16} color="gray" />
                  <FontAwesomeIcon icon={faEdit} fontSize={16} color="gray" />
                </div>
              </td>
            </tr>
            <tr>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>
                <div className="user-container-status">
                  <span className="dot-status-non-active"></span>
                  <span>NÃO</span>
                </div>
              </td>
              <td>
                <div className="user-container-opcoes">
                  <FontAwesomeIcon icon={faTrash} fontSize={16} color="gray" />
                  <FontAwesomeIcon icon={faEdit} fontSize={16} color="gray" />
                </div>
              </td>
            </tr>
            <tr>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>
                <div className="user-container-status">
                  <span className="dot-status-non-active"></span>
                  <span>NÃO</span>
                </div>
              </td>
              <td>
                <div className="user-container-opcoes">
                  <FontAwesomeIcon icon={faTrash} fontSize={16} color="gray" />
                  <FontAwesomeIcon icon={faEdit} fontSize={16} color="gray" />
                </div>
              </td>
            </tr>
            <tr>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>
                <div className="user-container-status">
                  <span className="dot-status-non-active"></span>
                  <span>NÃO</span>
                </div>
              </td>
              <td>
                <div className="user-container-opcoes">
                  <FontAwesomeIcon icon={faTrash} fontSize={16} color="gray" />
                  <FontAwesomeIcon icon={faEdit} fontSize={16} color="gray" />
                </div>
              </td>
            </tr>
            <tr>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>
                <div className="user-container-status">
                  <span className="dot-status-non-active"></span>
                  <span>NÃO</span>
                </div>
              </td>
              <td>
                <div className="user-container-opcoes">
                  <FontAwesomeIcon icon={faTrash} fontSize={16} color="gray" />
                  <FontAwesomeIcon icon={faEdit} fontSize={16} color="gray" />
                </div>
              </td>
            </tr>
            <tr>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>
                <div className="user-container-status">
                  <span className="dot-status-non-active"></span>
                  <span>NÃO</span>
                </div>
              </td>
              <td>
                <div className="user-container-opcoes">
                  <FontAwesomeIcon icon={faTrash} fontSize={16} color="gray" />
                  <FontAwesomeIcon icon={faEdit} fontSize={16} color="gray" />
                </div>
              </td>
            </tr>
            <tr>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>eee</td>
              <td>
                <div className="user-container-status">
                  <span className="dot-status-non-active"></span>
                  <span>NÃO</span>
                </div>
              </td>
              <td>
                <div className="user-container-opcoes">
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

export default User;
