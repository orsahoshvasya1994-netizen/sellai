import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 5200 },
  { month: "Mar", sales: 4800 },
  { month: "Apr", sales: 7000 },
  { month: "May", sales: 8200 },
  { month: "Jun", sales: 9100 },
];

export default function SalesChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={data}>
        <CartesianGrid stroke="#334155" />
        <XAxis dataKey="month" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#7c5cff"
          strokeWidth={4}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}