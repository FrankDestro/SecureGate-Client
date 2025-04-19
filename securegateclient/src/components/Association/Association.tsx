import { faSave, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "../Button/Button";
import SearchInput from "../SearchInput/SearchInput";
import TransferList from "../TransferList/TransferList";
import "./Association.css";

function Association() {
  const [nomeUsuario, setNomeUsuario] = useState(""); // Valor do input
  const [usuario, setUsuario] = useState<any>(null); // Armazena os dados do usuário
  const [loading, setLoading] = useState(false);

  // Função simulada para buscar usuário com dados hardcoded
  const buscarUsuario = async (nome: string) => {
    setLoading(true);
    // Simulação de requisição ao backend para buscar o usuário (dados hardcoded)
    setTimeout(() => {
      const usuarioEncontrado = {
        nome: nome || "Usuário Teste", // Se o nome estiver vazio, usa "Usuário Teste"
        sistemasAssociados: ["Sistema Financeiro", "Sistema de RH"], // Sistemas já associados
      };
      setUsuario(usuarioEncontrado);
      setLoading(false);
    }, 1000);
  };

  const handleSubmit = () => {
    // Aqui você pode acessar os dados e enviar pro backend
    console.log("Nome do usuário:", nomeUsuario || "Usuário Teste");
    console.log("Sistemas Associados:", usuario?.sistemasAssociados);
    // Adicione lógica para salvar a associação
  };

  const handleBuscar = () => {
    // Aqui você pode testar diretamente com o nome inserido no input ou um nome fixo
    buscarUsuario(nomeUsuario || "Usuário Teste");
    setNomeUsuario("");
    document.activeElement instanceof HTMLElement && document.activeElement.blur();

  };

  return (
    <div className="system-container-main">
      <div className="system-container-title">
        <h1>Associar Sistema ao Usuário</h1>
      </div>
      <div className="association-container-search">
        <SearchInput
          label="Buscar "
          value={nomeUsuario}
          onChange={(e) => setNomeUsuario(e.target.value)}
        />
        <Button
          text="Buscar usuário"
          icon={faSearch}
          background="#1976d2"
          hoverColor="#1976d2"
          borderRadius="5px"
          onClick={handleBuscar}
          isLoading={loading}
          disabled={loading}
        />
      </div>

      {usuario && (
        <div className="user-info-card">
          <h3>Dados do Usuário</h3>
          <p>
            <strong>Nome:</strong> {usuario.nome}
          </p>
          <p>
            <strong>Sistemas Associados:</strong>{" "}
            <span className="associated-system-user">
              {usuario.sistemasAssociados.join(" | ")}
            </span>
          </p>
        </div>
      )}

      {usuario && (
        <div className="transfer-list-info">
          <TransferList
            sistemasAssociados={usuario.sistemasAssociados}
            setSistemasAssociados={(novosSistemas: string[]) =>
              setUsuario({ ...usuario, sistemasAssociados: novosSistemas })
            }
          />
        </div>
      )}

      {usuario && (
        <Button
          text="Salvar Associação"
          icon={faSave}
          background="#1976d2"
          hoverColor="#1976d2"
          borderRadius="5px"
          onClick={handleSubmit}
          disabled={!usuario}
        />
      )}
    </div>

    // <div className="associacao-form">
    //   <h2>Associar Sistemas ao Usuário</h2>

    //   <div className="form-group">
    //     <label>Nome do Usuário</label>
    //     <input
    //       type="text"
    //       value={nomeUsuario}
    //       onChange={(e) => setNomeUsuario(e.target.value)}
    //     />
    //     <button onClick={handleBuscar} disabled={loading}>
    //       {loading ? "Buscando..." : "Buscar Usuário"}
    //     </button>
    //   </div>

    //   {usuario && (
    //     <div className="user-info">
    //       <h3>Dados do Usuário</h3>
    //       <p><strong>Nome:</strong> {usuario.nome}</p>
    //       <p><strong>Sistemas Associados:</strong> {usuario.sistemasAssociados.join(", ")}</p>
    //     </div>
    //   )}

    //   {usuario && (
    //     <TransferList
    //       sistemasAssociados={usuario.sistemasAssociados}
    //       setSistemasAssociados={(novosSistemas: string[]) => setUsuario({ ...usuario, sistemasAssociados: novosSistemas })}
    //     />
    //   )}

    //   <button className="btn-salvar" onClick={handleSubmit} disabled={!usuario}>
    //     Salvar Associação
    //   </button>
    // </div>
  );
}

export default Association;
