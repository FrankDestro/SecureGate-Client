export function dataFormat(value: string): string {
  const date = new Date(value);

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

// utils/systemUtils.ts
export function createEmptySystem() {
  return {
    id: "",
    nome: "",
    clientId: "",
    clientSecret: "",
    descricao: "",
    ativo: false,
    dataRegistro: "",
    dataAtualizacao: "",
    roles: [],
    permissions: [],
  };
}


