// src/pages/Association/Association.tsx
import { faSave, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dayjs } from 'dayjs';
import { useState } from "react";
import { toast } from "react-toastify";
import AntDateInput from "../../../components/form/AntDateInput/AntDateInput";
import CustomSelect from "../../../components/form/Select/CustomSelect";
import { formatDateToApi } from "../../../utils/helpers/functions";
import useAssociation from "../hooks/useAssociation";
import useSistema from "../hooks/useSistemas";
import useSistemaPerfis from "../hooks/useSistemasPerfis";
import useUsuario from "../hooks/useUsuario";
import { AssociationDTO } from "../models/association";
import "./AssociationModule.css";

type QueryParams = {
  text: string;
};

export default function AssociationModule() {

  // ===== Estados de filtro e seleção =====
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [selectedProfiles, setSelectedProfiles] = useState<string[]>([]);
  const [selectedSystem, setSelectedSystem] = useState<string | number>();
  const [queryParams, setQueryParams] = useState<QueryParams>({ text: "" });
  const [dataInicial, setDataInicial] = useState<Dayjs | null>(null);
  const [dataFinal, setDataFinal] = useState<Dayjs | null>(null);
  const { submit } = useAssociation();

  // =====  FILTRO DE BUSCA USUÁRIO  =====
  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    setQueryParams({ text: searchTerm.trim() });
    setSelectedUser(searchTerm.trim());
    setSearchTerm("");
  };

  // =====  FUNÇÃO PARA SELECIONAR OS PERFIS DE SISTEMA =====
  const toggleProfile = (id: string) => {
    setSelectedProfiles((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  // ===== FUNÇÃO PARA SELECIONAR TODOS OS PERFIS OU DESELECIONAR =====
  const selectAll = () => setSelectedProfiles(perfis.map((p) => p.id));
  const deselectAll = () => setSelectedProfiles([]);


  // ===== REQUISIÇÃO DE SALVAR ASSOCACIAÇÃO =====
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !selectedUser ||
      !selectedSystem ||
      selectedProfiles.length === 0 ||
      dataInicial == null ||
      dataFinal == null
    ) {
      toast.warning("Preencha todos os campos obrigatórios");
      return;
    }

    const datasFormatadas = {
      dataInicial: formatDateToApi(dataInicial),
      dataFinal: formatDateToApi(dataFinal),
    };

    const associationRequestObj: AssociationDTO = {
      userId: Number(selectedUser),
      systemId: Number(selectedSystem),
      roleList: selectedProfiles.map(Number),
      dataInicialAcesso: datasFormatadas.dataInicial,
      dataFinalAcesso: datasFormatadas.dataFinal,
    };

    const status = await submit(associationRequestObj);
    if (status === 200 || status === 201) {
      toast.success("Associação salva com sucesso!");
      eraseForm();
    }
  };


  //===== HOOKS DE REQUISIÇÕES GET =====
  const { sistemas } = useSistema();
  const { perfis } = useSistemaPerfis(Number(selectedSystem));
  const { usuario } = useUsuario(queryParams.text);
  const sistemaSelecionado = sistemas?.find(s => s.id === selectedSystem);

  //===== CONVERTER PARA TIPO VALUE/LABEL PARA O CUSTOMSELECT =====
  const opcoesSistemas = sistemas?.map(s => ({
    value: s.id,
    label: s.name,
  }));

  ////===== Limpar todos os campos =====
  const eraseForm = () => {
    setSearchTerm("");
    setSelectedUser(null);
    setSelectedSystem(undefined);
    setSelectedProfiles([]);
    setQueryParams({ text: "" });
    setDataInicial(null)
    setDataFinal(null)
  };

  return (
    <div className="association-container">
      <header className="association-header">
        <h1>Associar Usuário, Sistema e Perfis</h1>
        <p>Configure os acessos e permissões</p>
      </header>

      {/* Busca Usuário */}
      <section className="user-access-container">
        <h2 style={{ marginBottom: "10px" }}>Usuário</h2>
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

      <form onSubmit={handleSubmit}>


        {usuario && (
          <>
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
          </>
        )}



        {/* Sistema */}
        {selectedUser && (
          <>
            <section className="user-access-container">
              <h2 style={{ marginBottom: "10px" }}>Sistema</h2>
              <CustomSelect
                options={opcoesSistemas}
                placeholder="Selecione um sistema"
                onChange={setSelectedSystem}
                style={{ width: 300, marginBottom: 20 }}
                value={selectedSystem}
              />

              <div className="container-data-acesso-sistema">
                <div className="date-input-container">
                  <AntDateInput
                    label="Data Inical de acesso"
                    value={dataInicial}
                    placeholder="Selecione uma Data Inicial"
                    onChange={(d, str) => {
                      console.log('Dayjs:', d);
                      console.log('String:', str);
                      setDataInicial(d);
                    }}
                  />

                </div>
                <div className="date-input-container">
                  <AntDateInput
                    label="Data Final de acesso"
                    value={dataFinal}
                    placeholder="Selecione uma data final"
                    onChange={(d, str) => {
                      console.log('Dayjs:', d);
                      console.log('String:', str);
                      setDataFinal(d);
                    }}
                  />
                </div>
              </div>
            </section>
          </>
        )}



        {selectedSystem && (
          <>
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
                      value={selectedProfiles}
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
                        .join(",")
                      : "Nenhum perfil selecionado"}
                  </span>
                </div>
              </div>
            </section>
          </>
        )}

        {selectedSystem && (
          <>
            {/* Botões de ação */}
            <section className="user-access-container">
              <div className="action-buttons">
                <button className="btn-cancel">Cancelar</button>
                <button
                  className="btn-save"
                  type="submit"
                  disabled={!selectedSystem || selectedProfiles.length === 0 || !useSistema || !dataInicial || !dataFinal}
                >
                  <FontAwesomeIcon icon={faSave} />
                  Salvar Associação
                </button>
              </div>
            </section>
          </>
        )}
      </form>
    </div>
  );
}