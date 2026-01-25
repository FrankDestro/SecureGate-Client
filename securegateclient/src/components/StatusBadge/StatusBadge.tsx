import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  label: string;
  variant?: "success" | "danger" | "warning" | "neutral";
};

export function StatusBadge({
  icon,
  label,
  variant = "neutral",
}: Props) {
  return (
    <span className={`status-badge status-${variant}`}>
      {icon}
      {label}
    </span>
  );
}
