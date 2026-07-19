import "./CurrentPlan.css";

import {
  FaCheckCircle,
  FaRocket,
  FaCrown,
  FaBuilding,
} from "react-icons/fa";

import { useSubscription } from "../context/SubscriptionContext";

export default function CurrentPlan() {
  const { plan } = useSubscription();

  const plans = {
    FREE: {
      icon: <FaRocket />,
      color: "#64748b",
      title: "Free Plan",
      description: "Perfect for getting started.",
    },

    STARTER: {
      icon: <FaRocket />,
      color: "#4f8cff",
      title: "Starter Plan",
      description: "Ideal for small businesses.",
    },

    PRO: {
      icon: <FaCrown />,
      color: "#6d5dfc",
      title: "Pro Plan",
      description: "Best for growing companies.",
    },

    BUSINESS: {
      icon: <FaBuilding />,
      color: "#22c55e",
      title: "Business Plan",
      description: "Enterprise AI platform.",
    },
  };

  const current = plans[plan] || plans.FREE;

  return (
    <div className="current-plan">

      <div
        className="plan-icon"
        style={{
          background: current.color,
        }}
      >
        {current.icon}
      </div>

      <div className="plan-info">

        <h2>{current.title}</h2>

        <p>{current.description}</p>

      </div>

      <div
        className="plan-status"
        style={{
          color: current.color,
        }}
      >
        <FaCheckCircle />

        Active
      </div>

    </div>
  );
}