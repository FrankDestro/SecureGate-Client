import ReactECharts from 'echarts-for-react';

interface UserStatusData {
  status: string;
  value: number;
}

const userStatusData: UserStatusData[] = [
  { status: 'Ativos', value: 1050 },
  { status: 'Inativos', value: 150 },
];

const option = {
  title: {
    text: 'Usuários Ativos / Inativos',
    left: 'left', // Posiciona o título no topo esquerdo
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
    orient: 'vertical',
    left: 'left',
    top: 'middle',
    data: userStatusData.map((item) => item.status),
    textStyle: {
      fontSize: 14,
    },
  },
  series: [
    {
      name: 'Usuários Ativos/Inativos',
      type: 'pie',
      radius: '50%',
      data: userStatusData.map((item) => ({
        value: item.value,
        name: item.status,
      })),
      color: ['#36A2EB', '#FF6384'], // Cor das fatias
      label: {
        show: true,
        position: 'outside', // Posiciona o rótulo para fora
        formatter: '{b}: {c} ({d}%)', // Exibe diretamente o nome, valor e porcentagem
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

const Echarts = () => {
  return (
    <div style={{ width: '70%', height: '100%' }}>
      <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />
    </div>
  );
};

export default Echarts;
