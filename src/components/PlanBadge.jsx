import "./PlanBadge.css";

import {
  FaRocket,
  FaCrown,
  FaBuilding,
} from "react-icons/fa";

import { useSubscription } from "../context/SubscriptionContext";

export default function PlanBadge() {
  const { plan } = useSubscription();

  const plans = {
    FREE: {
      title: "FREE",
      color: "#64748b",
      background: "#1e293b",
      icon: <FaRocket />,
    },

    STARTER: {
      title: "STARTER",
      color: "#4f8cff",
      background: "#0f2747",
      icon: <FaRocket />,
    },

    PRO: {
      title: "PRO",
      color: "#6d5dfc",
      background: "#241b47",
      icon: <FaCrown />,
    },

    BUSINESS: {
      title: "BUSINESS",
      color: "#22c55e",
      background: "#123325",
      icon: <FaBuilding />,
    },
  };

  const currentPlan = plans[plan] || plans.FREE;

  return (
    <div
      className="plan-badge"
      style={{
        color: currentPlan.color,
        background: currentPlan.background,
      }}
    >
      <span className="plan-icon">
        {currentPlan.icon}
      </span>

      <span className="plan-title">
        {currentPlan.title}
      </span>
    </div>
  );
}