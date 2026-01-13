import { faCogs, faLayerGroup, faPeopleGroup, faPowerOff, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../../../components/CardSummary/CardSummary";
import "./Summary.css";

function Summary() {
  const summaryData = [
    { title: "Total de Usuários Cadastrados", value: 1200, icon: faUsers },
    { title: "Total de Sistemas Registrados", value: 32, icon: faCogs },
    { title: "Total de Associações Sistema/Usuário", value: 3000, icon: faLayerGroup },
    { title: "Total de Usuários Ativos", value: 300, icon: faPeopleGroup },
    { title: "Total de Usuários Inativos", value: 300, icon: faPowerOff },
  ];

  return (
    <div className="summary-container">
      {summaryData.map((item, index) => (
        <Card
          key={index}
          icon={<FontAwesomeIcon icon={item.icon} />}
          title={item.title}
          value={item.value}
        />
      ))}
    </div>
  );
}

export default Summary;
