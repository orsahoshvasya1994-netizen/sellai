import "./InsightsPanel.css";

export default function InsightsPanel({ insights }) {
  return (
    <div className="insights-panel">
      <h3>🤖 AI Insights</h3>

      <div className="insights-list">
        {insights.length ? (
          insights.map((item, index) => (
            <div
              className="insight-card"
              key={index}
            >
              {item}
            </div>
          ))
        ) : (
          <div className="insight-card">
            No insights available.
          </div>
        )}
      </div>
    </div>
  );
}