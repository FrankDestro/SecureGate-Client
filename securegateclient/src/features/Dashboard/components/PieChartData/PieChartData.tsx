import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { ChartData, ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Title, Tooltip, Legend, ChartDataLabels);

interface UserStatusData {
  status: string;
  value: number;
}

const userStatusData: UserStatusData[] = [
  { status: 'Ativos', value: 1050 },
  { status: 'Inativos', value: 150 },
];

const pieChartData: ChartData<'pie'> = {
  labels: userStatusData.map((item) => item.status),
  datasets: [
    {
      label: 'Usuários Ativos/Inativos',
      data: userStatusData.map((item) => item.value),
      backgroundColor: ['#36A2EB', '#FF6384'],
      hoverOffset: 4,
    },
  ],
};

const pieChartOptions: ChartOptions<'pie'> = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Usuários Ativos / Inativos',
      font: {
        size: 18,
        weight: 'bold',
      },
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          const value = context.raw;
          return `Valor: ${value}`;
        },
      },
    },
    datalabels: {
      display: true,
      formatter: (value: number, context: any) => {
        const total = context.dataset.data.reduce((acc: number, curr: number) => acc + curr, 0);
        const percentage = ((value / total) * 100).toFixed(2);
        return `${percentage}%`; // Exibe a porcentagem
      },
      color: 'white', // Cor do texto
      font: {
        weight: 'bold',
      },
    },
  },
};

const PieChart: React.FC = () => {
  return (
    <div style={{ width: '70%', height: '100%' }}>
      <Pie data={pieChartData} options={pieChartOptions} />
    </div>
  );
};

export default PieChart;
