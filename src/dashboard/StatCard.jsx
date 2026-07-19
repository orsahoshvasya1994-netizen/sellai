import { motion } from "framer-motion";
import "./StatCard.css";

export default function StatCard({
  title,
  value,
  icon,
  color,
  trend = "+0%",
}) {
  const isPositive = trend.startsWith("+");

  return (
    <motion.div
      className="stat-card"
      style={{ borderLeft: `5px solid ${color}` }}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
    >
      <div
        className="stat-icon"
        style={{
          color,
          background: `${color}20`,
        }}
      >
        {icon}
      </div>

      <div className="stat-info">
        <span className="stat-title">
          {title}
        </span>

        <h2>{value}</h2>

        <div
          className={`trend ${
            isPositive ? "positive" : "negative"
          }`}
        >
          {trend}
        </div>
      </div>
    </motion.div>
  );
}