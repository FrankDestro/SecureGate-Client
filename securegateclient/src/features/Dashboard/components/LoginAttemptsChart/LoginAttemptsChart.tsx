import React from 'react';
import ReactECharts from 'echarts-for-react';

const loginAttemptsData = [
  { type: 'Tentativas', count: 300 },
  { type: 'Falhas', count: 50 },
];

const loginAttemptsOption = {
  title: {
    text: 'Tentativas de Login e Falhas',
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
    data: loginAttemptsData.map((item) => item.type),
  },
  yAxis: {
    type: 'value',
    name: 'Número de Tentativas',
    min: 0,
  },
  series: [
    {
      data: loginAttemptsData.map((item) => item.count),
      type: 'bar',
      itemStyle: {
        color: '#FF6384',
      },
    },
  ],
};

const LoginAttemptsChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ReactECharts option={loginAttemptsOption} style={{ height: '100%', width: '100%' }} />
    </div>
  );
};

export default LoginAttemptsChart;
