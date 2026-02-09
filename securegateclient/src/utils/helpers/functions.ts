import type { Dayjs } from 'dayjs';

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

export function formatSystemsTooltip(systems: { [key: string]: any }): string {
  const systemNames = Object.keys(systems);
  const lines: string[] = [];

  for (let i = 0; i < systemNames.length; i += 3) {
    lines.push(systemNames.slice(i, i + 3).join(", "));
  }
  return lines.join("\n");
}


export const formatDateToApi = (date?: Dayjs | null): string | null => {
  return date ? date.format('YYYY-MM-DD') : null;
};


export const setBadgeStyleByEnvironmentType = (
  type: string
): React.CSSProperties => {
  switch (type.toLowerCase()) {
    case "dev":
      return {
        backgroundColor: "#1e88e5", // azul dev
        color: "#fff",
        padding: "4px 10px",
        borderRadius: "6px",
        fontSize: "12px",
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontWeight: 500,
      };

    case "homolog":
      return {
        backgroundColor: "#8e24aa", // roxo homolog
        color: "#fff",
        padding: "4px 10px",
        borderRadius: "6px",
        fontSize: "12px",
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontWeight: 500,
      };

    case "prod":
      return {
        backgroundColor: "#2e7d32", // verde prod
        color: "#fff",
        padding: "4px 10px",
        borderRadius: "6px",
        fontSize: "12px",
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
      };

    default:
      return {
        backgroundColor: "#e0e0e0",
        color: "#333",
        padding: "4px 10px",
        borderRadius: "6px",
        fontSize: "12px",
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
      };
  }
};


