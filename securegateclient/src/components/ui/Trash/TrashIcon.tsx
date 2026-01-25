import { useState } from "react";
import "./TrashIcon.css"; // Importa o CSS externo

const TrashIcon = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="trash-icon-wrapper">
    <svg
      className={`trash-icon ${open ? "open" : ""}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      stroke="gray"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: "28px", height: "28px", cursor: "pointer" }}
      onClick={() => setOpen(!open)}
    >
      <g className="trash-lid">
        <path d="M14 14 L34 14" />
        <rect x="20" y="10" width="8" height="3" rx="1" ry="1" fill="none" />
      </g>
  
      <path
        d="
          M16 14 
          L32 14 
          L30 34 
          Q30 36 28 36 
          L20 36 
          Q18 36 18 34 
          L16 14 
          Z
        "
        fill="none"
      />
      <line x1="21.5" y1="18" x2="21.5" y2="30" />
      <line x1="26.5" y1="18" x2="26.5" y2="30" />
    </svg>
  </div>
  
  );
};

export default TrashIcon;
