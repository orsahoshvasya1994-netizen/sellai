import { FaWallet } from "react-icons/fa";
import "./RevenueCard.css";

export default function RevenueCard({
  revenue = 0,
}) {
  const target = 180000;

  const progress = Math.min(
    Math.round((revenue / target) * 100),
    100
  );

  const growth = revenue
    ? Math.round((revenue / target) * 18)
    : 0;

  return (
    <div className="revenue-card">

      <div className="revenue-top">

        <div>

          <p>Total Revenue</p>

          <h1>
            ${revenue.toLocaleString()}
          </h1>

        </div>

        <FaWallet className="wallet-icon" />

      </div>

      <div className="revenue-progress">

        <div className="progress-line">

          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <span>
          {progress}% of monthly goal
        </span>

      </div>

      <div className="revenue-footer">

        <div>

          <h4>Monthly Target</h4>

          <p>
            ${target.toLocaleString()}
          </p>

        </div>

        <div>

          <h4>Growth</h4>

          <p className="green">
            +{growth}%
          </p>

        </div>

      </div>

    </div>
  );
}