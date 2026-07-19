import "./RevenueChart.css";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function RevenueChart({ data }) {
  return (
    <div className="revenue-chart-card">
      <div className="chart-header">
        <div>
          <h2>Revenue Growth</h2>
          <p>Monthly revenue overview</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid
            stroke="#2c3a52"
            strokeDasharray="5 5"
          />

          <XAxis
            dataKey="month"
            stroke="#9aa4b2"
          />

          <YAxis
            stroke="#9aa4b2"
          />

          <Tooltip
            contentStyle={{
              background: "#1b2538",
              border: "1px solid #2d3f5e",
              borderRadius: "12px",
            }}
          />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#6d5dfc"
            strokeWidth={4}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}