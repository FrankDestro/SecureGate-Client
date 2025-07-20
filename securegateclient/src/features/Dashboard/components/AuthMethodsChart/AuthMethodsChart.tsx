import ReactECharts from 'echarts-for-react';

const authMethodsData = [
  { method: 'Senha', count: 400 },
  { method: 'Autenticação 2F', count: 150 },
  { method: 'Outros', count: 50 },
];

const authMethodsOption = {
  title: {
    text: 'Autenticações por Método',
    left: 'center', // Centraliza o título no topo
    top: '20px',
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c} ({d}%)', // Exibe o nome, valor e porcentagem
  },
  legend: {
    orient: 'horizontal',
    left: 'left',
    top: 'bottom',
    data: authMethodsData.map((item) => item.method),
    textStyle: {
      fontSize: 14,
    },
  },
  series: [
    {
      name: 'Métodos de Autenticação',
      type: 'pie',
      radius: '50%',
      data: authMethodsData.map((item) => ({
        value: item.count,
        name: item.method,
      })),
      color: ['#FF6384', '#36A2EB', '#FFCD56'], // Cor das fatias
      label: {
        show: true,
        position: 'outside', // Coloca os rótulos para fora
        formatter: '{b}: {c} ({d}%)', // Exibe nome, valor e porcentagem
        color: 'black', // Cor do texto
        fontWeight: 'bold',
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
};

const AuthMethodsChart: React.FC = () => {
  return (
    <div style={{ width: '70%', height: '100%' }}>
      <ReactECharts option={authMethodsOption} style={{ height: '400px', width: '100%' }} />
    </div>
  );
};

export default AuthMethodsChart;
