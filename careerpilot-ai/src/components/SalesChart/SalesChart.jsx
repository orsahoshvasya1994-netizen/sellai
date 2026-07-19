import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
  datasets: [
    {
      label: "Продажі",
      data: [8, 14, 10, 18, 22, 30, 26],
      borderColor: "#5b7cff",
      backgroundColor: "rgba(91,124,255,0.25)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: "white",
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "white",
      },
      grid: {
        color: "#29344f",
      },
    },
    y: {
      ticks: {
        color: "white",
      },
      grid: {
        color: "#29344f",
      },
    },
  },
};

export default function SalesChart() {
  return <Line data={data} options={options} />;
}