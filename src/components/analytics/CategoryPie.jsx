import "./CategoryPie.css";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = [
  "#6d5dfc",
  "#28c76f",
  "#ff9f43",
  "#ea5455",
  "#00cfe8",
  "#7367f0",
];

export default function CategoryPie({ data }) {
  return (
    <div className="category-card">
      <h3>📦 Sales by Category</h3>

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            innerRadius={60}
            paddingAngle={3}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}