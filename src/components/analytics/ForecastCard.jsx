import "./ForecastCard.css";

export default function ForecastCard({ stats }) {
  return (
    <div className="forecast-card-wrapper">

      <h3>📈 Revenue Forecast</h3>

      <div className="forecast-card">

        <div className="forecast-item">
          <span>Current Revenue</span>

          <h2>
            $
            {stats.revenue.toLocaleString()}
          </h2>
        </div>

        <div className="forecast-item">
          <span>Next Month Prediction</span>

          <h2 className="forecast-next">
            $
            {stats.forecast.toLocaleString()}
          </h2>
        </div>

      </div>

    </div>
  );
}