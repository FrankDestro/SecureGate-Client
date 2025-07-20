import React from 'react';
import ReactECharts from 'echarts-for-react';

const associationData = [
  { system: 'Sistema A', associations: 120 },
  { system: 'Sistema B', associations: 90 },
  { system: 'Sistema C', associations: 150 },
  { system: 'Sistema D', associations: 80 },
  { system: 'Sistema E', associations: 200 },
];

const associationOption = {
  title: {
    text: 'Associações de Usuários por Sistema',
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
    data: associationData.map((item) => item.system),
  },
  yAxis: {
    type: 'value',
    name: 'Número de Associações',
    min: 0,
  },
  series: [
    {
      data: associationData.map((item) => item.associations),
      type: 'bar',
      itemStyle: {
        color: '#36A2EB',
      },
    },
  ],
};

const AssociationChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ReactECharts option={associationOption} style={{ height: '100%', width: '100%' }} />
    </div>
  );
};

export default AssociationChart;
