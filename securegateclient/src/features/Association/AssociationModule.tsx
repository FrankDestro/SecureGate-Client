// src/pages/Association/Association.tsx
import { faSave, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import CustomSelect from "../../components/FormComponents/Select/CustomSelect";
import "./AssociationModule.css";
import useSistema from "./hooks/useSistemas";
import useSistemaPerfis from "./hooks/useSistemasPerfis";
import useUsuario from "./hooks/useUsuario";

type QueryParams = {
  text: string;
};

export default function AssociationModule() {



  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [selectedProfiles, setSelectedProfiles] = useState<string[]>([]);
  const [selectedSystem, setSelectedSystem] = useState<string | number>();
  const [queryParams, setQueryParams] = useState<QueryParams>({ text: "" });

  

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    setQueryParams({ text: searchTerm.trim() });
    setSelectedUser(searchTerm.trim());
    setSearchTerm("");
  };




  const toggleProfile = (id: string) => {
    setSelectedProfiles((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const selectAll = () => setSelectedProfiles(perfis.map((p) => p.id));
  const deselectAll = () => setSelectedProfiles([]);

  const handleSave = () => {
    if (!selectedUser || !selectedSystem || selectedProfiles.length === 0) return;

    console.log({
      usuario: selectedUser,
      sistema: selectedSystem,
      perfis: selectedProfiles,
    });

    alert("Associação salva com sucesso! (simulação)");
  };



  const { sistemas, isLoading: loadingSistemas } = useSistema();
  const { perfis, isLoading: loadingPerfis } = useSistemaPerfis(1);
  const { usuario, isLoading: loadingUsuario } = useUsuario(queryParams.text);

    const sistemaSelecionado = sistemas?.find(s => s.id === selectedSystem);


  if (loadingSistemas) return <p>Carregando sistemas...</p>;
  if (!sistemas) return <p>Nenhum sistema encontrado.</p>;
  if (loadingPerfis) return <p>Carregando perfis...</p>;
  if (!perfis) return <p>Nenhum perfil encontrado.</p>;

  const opcoesSistemas = sistemas.map(s => ({
    value: s.id,
    label: s.name,
  }));


  return (
    <div className="association-container">
      <header className="association-header">
        <h1>Associar Usuário, Sistema e Perfis</h1>
        <p>Configure os acessos e permissões</p>
      </header>

      {/* Usuário */}
      <section className="user-access-container">
        <h2>Usuário</h2>
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Busque por id ou nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button onClick={handleSearch} className="btn-search">
            <FontAwesomeIcon icon={faSearch} />
            Buscar
          </button>
        </div>
      </section>












      {/* RESUMO INFO USUARIO */}
      <section className="user-access-container">
        <h2>Dados do Usuário e Acessos Atuais</h2>
        <div className="summary-grid">
          <div>
            <strong>Matricula:</strong>
            <span>{usuario?.id}</span>
          </div>
          <div>
            <strong>Usuário:</strong>
            <span>{usuario?.email}</span>
          </div>
          <div>
            <strong>Email:</strong>
            <span>{usuario?.email}</span>
          </div>
        </div>
      </section>

      <div className="user-access-container">
        <h2 className="user-access-title">
          Acessos Atuais do Usuário
        </h2>
        <p className="user-access-subtitle">
          Sistemas e perfis já associados a este usuário
        </p>
        {usuario?.sistemas.map((sistema) => (
          <div className="systems-grid">
            <div key={sistema.systemId} className="system-card">
              <div className="system-title">{sistema.systemName}</div>
              <div className="roles-container">
                {sistema.permissions.map((permissions) => (
                  <span key={permissions.roleId} className="role-badge">
                    {permissions.roleName}
                  </span>
                ))}
              </div>
            </div>
          </div>

        ))}
      </div>

      {/* Sistema */}
      {selectedUser && (
        <>

          <section className="user-access-container">
            <h2>Sistema</h2>
            <CustomSelect
              options={opcoesSistemas}
              placeholder="Selecione um sistema"
              onChange={setSelectedSystem}
              style={{ width: 300, marginBottom: 20 }}
            />
          </section>

          {/* Perfis */}
          <section className="user-access-container">
            <h2>Perfis Disponíveis</h2>
            <p>Selecione os perfis para o sistema escolhido:</p>

            <div className="profile-list">
              {perfis.map((profile) => (
                <label key={profile.id} className="profile-item">
                  <input
                    type="checkbox"
                    checked={selectedProfiles.includes(profile.id)}
                    onChange={() => toggleProfile(profile.id)}
                  />
                  <div className="profile-info">
                    <strong>{profile.authority}</strong>
                    <span>{profile.authority}</span>
                  </div>
                </label>
              ))}
            </div>

            <div className="profile-actions">
              <button type="button" onClick={selectAll}>
                Selecionar Todos
              </button>
              <button type="button" onClick={deselectAll}>
                Desmarcar Todos
              </button>
            </div>
          </section>

          {/* Resumo */}
          <section className="user-access-container">
            <h2>Resumo da Nova Associação</h2>
            <div className="summary-grid">
              <div>
                <strong>Sistema selecionado:</strong>
                <span>
                  {sistemaSelecionado ? sistemaSelecionado.name : "—"}

                </span>
              </div>
              <div>
                <strong>Perfis que serão adicionados:</strong>
                <span className="profile-tags">
                  {perfis.length > 0
                    ? selectedProfiles
                      .map((id) => perfis.find((p) => p.id === id)?.authority)
                      .join(", ")
                    : "Nenhum perfil selecionado"}
                </span>
              </div>
            </div>
          </section>


          {/* Botões de ação */}
          <section className="user-access-container">
            <div className="action-buttons">
              <button className="btn-cancel">Cancelar</button>
              <button
                className="btn-save"
                onClick={handleSave}
                disabled={!selectedSystem || selectedProfiles.length === 0}
              >
                <FontAwesomeIcon icon={faSave} />
                Salvar Associação
              </button>
            </div>
          </section>
        </>
      )}
    </div>

  );
}