import React from 'react';
import ReactECharts from 'echarts-for-react';

const unassociationData = [
  { date: '2024-04-01', desassociations: 10 },
  { date: '2024-04-02', desassociations: 15 },
  { date: '2024-04-03', desassociations: 20 },
  { date: '2024-04-04', desassociations: 8 },
  { date: '2024-04-05', desassociations: 30 },
];

const unassociationOption = {
  title: {
    text: 'Desassociações de Usuários',
    left: 'center',
    top: '20px',
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  },
  tooltip: {},
  xAxis: {
    type: 'category',
    data: unassociationData.map((item) => item.date),
  },
  yAxis: {
    type: 'value',
    name: 'Nº Desa..',
    min: 0,
  },
  series: [
    {
      data: unassociationData.map((item) => item.desassociations),
      type: 'bar',
      itemStyle: {
        color: '#FF6384',
      },
    },
  ],
};

const UnassociationChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ReactECharts option={unassociationOption} style={{ height: '100%', width: '100%' }} />
    </div>
  );
};

export default UnassociationChart;
