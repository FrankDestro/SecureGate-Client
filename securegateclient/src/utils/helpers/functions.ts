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


export function formatSystemsTooltip(systems: { [key: string]: any }): string {
  const systemNames = Object.keys(systems);
  const lines: string[] = [];

  for (let i = 0; i < systemNames.length; i += 3) {
    lines.push(systemNames.slice(i, i + 3).join(", "));
  }

  return lines.join("\n");
}



