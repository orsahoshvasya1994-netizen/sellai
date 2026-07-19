import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import "./SalesChart.css";

export default function SalesChart({ data = [] }) {
  const [period, setPeriod] = useState("Month");

  const chartData = useMemo(() => {
    if (!data.length) {
      return [
        {
          name: "No Data",
          revenue: 0,
          profit: 0,
          orders: 0,
        },
      ];
    }

    switch (period) {
      case "Day":
        return data.slice(-7);

      case "Week":
        return data.slice(-8);

      case "Month":
        return data;

      case "Year":
        return data;

      default:
        return data;
    }
  }, [data, period]);

  return (
    <div className="chart-box">

      <div className="chart-header">

        <h2>📈 Sales Analytics</h2>

        <div className="period-buttons">

          {["Day", "Week", "Month", "Year"].map((item) => (
            <button
              key={item}
              className={period === item ? "active" : ""}
              onClick={() => setPeriod(item)}
            >
              {item}
            </button>
          ))}

        </div>

      </div>

      <ResponsiveContainer width="100%" height={380}>

        <LineChart data={chartData}>

          <CartesianGrid stroke="#2d3748" />

          <XAxis
            dataKey="name"
            stroke="#94a3b8"
          />

          <YAxis stroke="#94a3b8" />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#7c5cff"
            strokeWidth={4}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
          />

          <Line
            type="monotone"
            dataKey="profit"
            stroke="#10b981"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="orders"
            stroke="#f97316"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}