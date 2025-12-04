import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "../../components/Button/Button";
import DateInput from "../../components/DateInput/DateInput";
import BarChart from "./components/BarChartData/BarChartData";
import PieChartData from "./components/PieChartData/PieChartData";
import Summary from "./components/Summary/Summary";
import "./Dashboard.css";
import LineChart from "./components/LineChart/LineChart";
import UnassociationChart from "./components/UnassociationChart/UnassociationChart";
import AssociationChart from "./components/AssociationChart/AssociationChart";
import LoginAttemptsChart from "./components/LoginAttemptsChart/LoginAttemptsChart";
import BlockedUsersChart from "./components/BlockedUsersChart/BlockedUsersChart";
import AuthMethodsChart from "./components/AuthMethodsChart/AuthMethodsChart";

function Dashboard() {
  const [dataInicial, setDataInicial] = useState<string>("");
  const [dataFinal, setDataFinal] = useState<string>("");
  const [loading] = useState(false);

  const handleFilter = () => {
    console.log("Data Inicial:", dataInicial);
    console.log("Data Final:", dataFinal);
  };

  return (
    <>
      <div className="title-modules-system">
        <h1>Painel Geral</h1>
      </div>
      <div className="date-inputs-container">
        <div className="date-input-container">
          <DateInput
            label="Data Inicial"
            value={dataInicial}
            onChange={(e) => setDataInicial(e.target.value)}
          />
        </div>
        <div className="date-input-container">
          <DateInput
            label="Data Final"
            value={dataFinal}
            onChange={(e) => setDataFinal(e.target.value)}
          />
        </div>
        <Button
          text="Filtrar"
          icon={faFilter}
          background="#006d77"
          hoverColor="#004f59"
          borderRadius="5px"
          onClick={handleFilter}
          isLoading={loading}
          disabled={loading}
        />
      </div>

      <div className="dashboard-container">
        <div className="container-summary">
          <Summary />
        </div>

        <div className="chart-container-left">
          <BarChart />
        </div>
        <div className="chart-container-right">
          <PieChartData />
        </div>
        <div className="LineChart-container-center">
          <LineChart />
        </div>

        <div className="chart-container-left">
          <AssociationChart />
        </div>
        <div className="chart-container-right">
          <UnassociationChart />
        </div>

        <div className="chart-container-left">
          <LoginAttemptsChart /> {/* Gráfico de tentativas de login */}
        </div>

        <div className="chart-container-right">
          <BlockedUsersChart /> {/* Gráfico de usuários bloqueados */}
        </div>

        <div className="chart-container-left">
          <AuthMethodsChart /> {/* Gráfico de métodos de autenticação */}
        </div>

        <div className="chart-container-right">
          <UnassociationChart />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
