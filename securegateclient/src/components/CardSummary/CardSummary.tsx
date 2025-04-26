import { ReactNode } from "react";
import "./CardSummar.css";

interface CardProps {
    icon: ReactNode;
    title: string;
    value: number;
  }

function Card({ icon, title, value }: CardProps) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-info">
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
}

export default Card;
