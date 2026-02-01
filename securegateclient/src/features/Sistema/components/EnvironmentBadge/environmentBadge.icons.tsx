import { Check, Code, FlaskConical } from "lucide-react";
import { ReactNode } from "react";

export const getEnvironmentIcon = (type: string): ReactNode => {
  switch (type.toLowerCase()) {
    case "dev":
      return <Code size={14} strokeWidth={2} />;
    case "homolog":
      return <FlaskConical size={14} strokeWidth={2} />;
    case "prod":
      return <Check size={14} strokeWidth={2} />;
    default:
      return null;
  }
};
