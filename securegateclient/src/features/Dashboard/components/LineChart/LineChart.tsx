import React from 'react';
import ReactECharts from 'echarts-for-react';

// Dados fictícios de movimentação de sistemas ao longo do tempo
const systemData = [
  { date: '2023-01-01', systemA: 100, systemB: 200, systemC: 150 },
  { date: '2023-02-01', systemA: 150, systemB: 250, systemC: 200 },
  { date: '2023-03-01', systemA: 200, systemB: 300, systemC: 250 },
  { date: '2023-04-01', systemA: 250, systemB: 350, systemC: 300 },
  { date: '2023-05-01', systemA: 300, systemB: 400, systemC: 350 },
  { date: '2023-06-01', systemA: 350, systemB: 450, systemC: 400 },
  { date: '2023-07-01', systemA: 400, systemB: 500, systemC: 450 },
];

const option = {
  title: {
    text: 'Movimentações de Associação de Sistemas ao Longo do Tempo',
    left: 'center',
    top: '20px',
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
    },
  },
  legend: {
    data: ['Sistema A', 'Sistema B', 'Sistema C'],
    top: '40px',
  },
  xAxis: {
    type: 'category',
    data: systemData.map((item) => item.date), // Eixo X com as datas
    boundaryGap: false, // Ajuste das linhas para começar da linha de origem
    axisLabel: {
      rotate: 45, // Ajuste da rotação das datas
    },
  },
  yAxis: {
    type: 'value',
    name: 'Movimentação',
    min: 0,
  },
  series: [
    {
      name: 'Sistema A',
      type: 'line',
      data: systemData.map((item) => item.systemA),
      smooth: true, // Linha suave
      itemStyle: {
        color: '#36A2EB', // Cor da linha do Sistema A
      },
    },
    {
      name: 'Sistema B',
      type: 'line',
      data: systemData.map((item) => item.systemB),
      smooth: true, // Linha suave
      itemStyle: {
        color: '#FF6384', // Cor da linha do Sistema B
      },
    },
    {
      name: 'Sistema C',
      type: 'line',
      data: systemData.map((item) => item.systemC),
      smooth: true, // Linha suave
      itemStyle: {
        color: '#FFCD56', // Cor da linha do Sistema C
      },
    },
  ],
};

const LineChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
    </div>
  );
};

export default LineChart;
