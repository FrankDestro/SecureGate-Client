// import React from "react";
// import { Chart } from "react-google-charts";

// const BarChart: React.FC = () => {
//   const systemData = [
//     { system: "Sistema A", users: 500 },
//     { system: "Sistema B", users: 400 },
//     { system: "Sistema C", users: 300 },
//     { system: "Sistema D", users: 100 },
//     { system: "Sistema E", users: 150 },
//     { system: "Sistema F", users: 800 },
//     { system: "Sistema G", users: 250 },
//     { system: "Sistema H", users: 450 },
//     { system: "Sistema I", users: 200 },
//     { system: "Sistema J", users: 350 },
//     { system: "Sistema K", users: 600 },
//     { system: "Sistema L", users: 550 },
//     { system: "Sistema M", users: 700 },
//     { system: "Sistema N", users: 400 },
//     { system: "Sistema O", users: 300 },
//   ];
//   const data = [
//     ["Sistema", "Usuários"],
//     ...systemData.map((item) => [item.system, item.users]),
//   ];

//   const options = {
//     title: "Usuários por Sistema",
//     chartArea: { width: "100%" },
//     hAxis: {
//       title: "Usuários",
//       minValue: 0,
//     },
//     vAxis: {
//       title: "Sistema",
//     },
//   };

//   return (
//     <Chart
//       chartType="Bar"
//       data={data}
//       options={options}
//       width="100%"
//       height="100%"
//     />
//   );
// };

// export default BarChart;

import React from 'react';
import ReactECharts from 'echarts-for-react';

const BarChart: React.FC = () => {
  const systemData = [
    { system: 'Sistema A', users: 500 },
    { system: 'Sistema B', users: 400 },
    { system: 'Sistema C', users: 300 },
    { system: 'Sistema D', users: 100 },
    { system: 'Sistema E', users: 150 },
    { system: 'Sistema F', users: 800 },
    { system: 'Sistema G', users: 250 },
    { system: 'Sistema H', users: 450 },
    { system: 'Sistema I', users: 200 },
    { system: 'Sistema J', users: 350 },
    { system: 'Sistema K', users: 600 },
    { system: 'Sistema L', users: 550 },
    { system: 'Sistema M', users: 700 },
    { system: 'Sistema N', users: 400 },
    { system: 'Sistema O', users: 300 },
  ];

  const option = {
    title: {
      text: 'Usuários por Sistema',
      left: 'center',
      top: '20px',
      textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} usuários', // Exibe o nome do sistema e o número de usuários
    },
    xAxis: {
      type: 'category',
      data: systemData.map((item) => item.system),
      axisLabel: {
        rotate: 45, // Para ajustar o nome dos sistemas na horizontal
      },
    },
    yAxis: {
      type: 'value',
      name: 'Usuários',
      min: 0,
    },
    series: [
      {
        data: systemData.map((item) => item.users),
        type: 'bar',
        itemStyle: {
          color: '#36A2EB', // Cor das barras
        },
      },
    ],
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
    </div>
  );
};

export default BarChart;

