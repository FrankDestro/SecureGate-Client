import { useState } from "react";
import "./TransferList.css";

type TransferListProps = {
  sistemasAssociados: string[];
  setSistemasAssociados: (novosSistemas: string[]) => void;
};

function TransferList({ sistemasAssociados, setSistemasAssociados }: TransferListProps) {
  const initialAvailable = [
    "Sistema Financeiro",
    "Sistema de Estoque",
    "Sistema de Relatórios",
    "Sistema de RH",
    "Sistema de Marketing",
  ];

  const [available, setAvailable] = useState(initialAvailable);
  const [selectedAvailable, setSelectedAvailable] = useState<string[]>([]);
  const [selectedAssociated, setSelectedAssociated] = useState<string[]>([]);

  const moveToAssociated = () => {
    setSistemasAssociados([...sistemasAssociados, ...selectedAvailable]);
    setAvailable(available.filter((item) => !selectedAvailable.includes(item)));
    setSelectedAvailable([]);
  };

  const moveToAvailable = () => {
    setSistemasAssociados(sistemasAssociados.filter((item) => !selectedAssociated.includes(item)));
    setAvailable([...available, ...selectedAssociated]);
    setSelectedAssociated([]);
  };

  return (
    <div className="transfer-list-container">
      <div className="list-box">
        <h3>Sistemas Disponíveis</h3>
        <select
          multiple
          value={selectedAvailable}
          onChange={(e) =>
            setSelectedAvailable(
              Array.from(e.target.selectedOptions, (opt) => opt.value)
            )
          }
        >
          {available.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="transfer-buttons">
        <button
          onClick={moveToAssociated}
          disabled={selectedAvailable.length === 0}
        >
          →
        </button>
        <button
          onClick={moveToAvailable}
          disabled={selectedAssociated.length === 0}
        >
          ←
        </button>
      </div>

      <div className="list-box">
        <h3>Sistemas Associados</h3>
        <select
          multiple
          value={selectedAssociated}
          onChange={(e) =>
            setSelectedAssociated(
              Array.from(e.target.selectedOptions, (opt) => opt.value)
            )
          }
        >
          {sistemasAssociados.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default TransferList;
