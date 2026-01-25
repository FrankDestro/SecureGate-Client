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