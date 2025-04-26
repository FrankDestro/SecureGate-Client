import React from "react";
import { Chart } from "react-google-charts";

const BarChart: React.FC = () => {
  const systemData = [
    { system: "Sistema A", users: 500 },
    { system: "Sistema B", users: 400 },
    { system: "Sistema C", users: 300 },
    { system: "Sistema D", users: 100 },
    { system: "Sistema E", users: 150 },
    { system: "Sistema F", users: 800 },
    { system: "Sistema G", users: 250 },
    { system: "Sistema H", users: 450 },
    { system: "Sistema I", users: 200 },
    { system: "Sistema J", users: 350 },
    { system: "Sistema K", users: 600 },
    { system: "Sistema L", users: 550 },
    { system: "Sistema M", users: 700 },
    { system: "Sistema N", users: 400 },
    { system: "Sistema O", users: 300 },
  ];
  const data = [
    ["Sistema", "Usuários"],
    ...systemData.map((item) => [item.system, item.users]),
  ];

  const options = {
    title: "Usuários por Sistema",
    chartArea: { width: "100%" },
    hAxis: {
      title: "Usuários",
      minValue: 0,
    },
    vAxis: {
      title: "Sistema",
    },
  };

  return (
    <Chart
      chartType="Bar"
      data={data}
      options={options}
      width="100%"
      height="100%"
    />
  );
};

export default BarChart;
