import "./KPICards.css";

export default function KPICards({ stats = {} }) {
  const cards = [
    {
      title: "Revenue",
      value: `$${(stats.revenue ?? 0).toLocaleString()}`,
      color: "green",
      icon: "💰",
    },
    {
      title: "Orders",
      value: (stats.orders ?? 0).toLocaleString(),
      color: "blue",
      icon: "📦",
    },
    {
      title: "Customers",
      value: (stats.customers ?? 0).toLocaleString(),
      color: "purple",
      icon: "👥",
    },
    {
      title: "Profit",
      value: `$${(stats.profit ?? 0).toLocaleString()}`,
      color: "orange",
      icon: "📈",
    },
  ];

  return (
    <div className="kpi-grid">
      {cards.map((card) => (
        <div className={`kpi-card ${card.color}`} key={card.title}>
          <div className="kpi-icon">{card.icon}</div>

          <div className="kpi-content">
            <h4>{card.title}</h4>
            <h2>{card.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}