import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "../../components/Button/Button";
import DateInput from "../../components/DateInput/DateInput";
import BarChart from "./components/BarChartData/BarChartData";
import PieChart from "./components/PieChartData/PieChartData";
import Summary from "./components/Summary/Summary";
import "./Dashboard.css";

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
      <div className="dashboard-container-title">
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
          <PieChart />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
