import "./StatCard.css";

export default function StatCard({ title, value, icon, color }) {
  return (
    <div
      className="stat-card"
      style={{ borderLeft: `5px solid ${color}` }}
    >
      <div
        className="stat-icon"
        style={{ color }}
      >
        {icon}
      </div>

      <div>
        <p>{title}</p>
        <h2>{value}</h2>
      </div>
    </div>
  );
}