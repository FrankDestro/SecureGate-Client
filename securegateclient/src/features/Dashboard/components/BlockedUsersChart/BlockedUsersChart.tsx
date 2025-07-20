import React from 'react';
import ReactECharts from 'echarts-for-react';

const blockedUsersData = [
  { type: 'Usuários Bloqueados', count: 20 },
  { type: 'Usuários Não Bloqueados', count: 180 },
];

const blockedUsersOption = {
  title: {
    text: 'Usuários Bloqueados',
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
    data: blockedUsersData.map((item) => item.type),
  },
  yAxis: {
    type: 'value',
    name: 'Nº de Usuários',
    min: 0,
  },
  series: [
    {
      data: blockedUsersData.map((item) => item.count),
      type: 'bar',
      itemStyle: {
        color: '#36A2EB',
      },
    },
  ],
};

const BlockedUsersChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ReactECharts option={blockedUsersOption} style={{ height: '100%', width: '100%' }} />
    </div>
  );
};

export default BlockedUsersChart;
