import { useState } from "react";
import { FaCheck, FaCrown, FaRocket, FaBuilding } from "react-icons/fa";
import { useSubscription } from "../components/context/SubscriptionContext";
import "./Pricing.css";

export default function Pricing() {
  const { plan, upgradePlan } = useSubscription();

  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      id: "free",
      name: "Free",
      icon: <FaCheck />,
      price: "$0",
      yearly: "$0",
      color: "#7c7c7c",
      popular: false,
      features: [
        "Up to 50 Products",
        "Up to 100 Orders",
        "Basic Dashboard",
        "Basic Analytics",
        "5 AI Requests / Day",
        "Email Support",
      ],
    },
    {
      id: "pro",
      name: "Pro",
      icon: <FaCrown />,
      price: "$19",
      yearly: "$190",
      color: "#7C5CFC",
      popular: true,
      features: [
        "Unlimited Products",
        "Unlimited Orders",
        "Unlimited Customers",
        "Advanced Analytics",
        "Unlimited AI Assistant",
        "PDF Export",
        "Excel Export",
        "Priority Support",
      ],
    },
    {
      id: "business",
      name: "Business",
      icon: <FaRocket />,
      price: "$49",
      yearly: "$490",
      color: "#0099ff",
      popular: false,
      features: [
        "Everything in Pro",
        "Multi User Team",
        "Roles & Permissions",
        "REST API",
        "Forecast AI",
        "Sales Reports",
        "Priority AI",
        "24/7 Support",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      icon: <FaBuilding />,
      price: "Custom",
      yearly: "Custom",
      color: "#00c853",
      popular: false,
      features: [
        "Unlimited Everything",
        "Dedicated Server",
        "Custom Integrations",
        "Personal Manager",
        "Enterprise AI",
        "White Label",
        "Custom Domain",
        "Premium SLA",
      ],
    },
  ];

  return (
    <div className="pricing-page">

      <div className="pricing-header">
        <h1>SellAI Pricing</h1>

        <p>
          Choose the perfect plan for your business.
        </p>

        <div className="billing-switch">

          <button
            className={billing === "monthly" ? "active" : ""}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>

          <button
            className={billing === "yearly" ? "active" : ""}
            onClick={() => setBilling("yearly")}
          >
            Yearly
          </button>

        </div>

      </div>

      <div className="pricing-grid">

        {plans.map((item) => (

          <div
            key={item.id}
            className={`pricing-card ${
              item.popular ? "popular" : ""
            }`}
          >

            {item.popular && (
              <div className="popular-badge">
                MOST POPULAR
              </div>
            )}

            <div
              className="plan-icon"
              style={{ background: item.color }}
            >
              {item.icon}
            </div>

            <h2>{item.name}</h2>

            <div className="plan-price">

              {billing === "monthly"
                ? item.price
                : item.yearly}

              {item.id !== "enterprise" &&
                item.id !== "free" && (
                  <span>
                    /{billing === "monthly"
                      ? "month"
                      : "year"}
                  </span>
              )}

            </div>

            <ul className="features">

              {item.features.map((feature) => (
                <li key={feature}>
                  <FaCheck />
                  {feature}
                </li>
              ))}

            </ul>            <button
              className={
                plan === item.id
                  ? "current-plan-btn"
                  : "upgrade-btn"
              }
              disabled={plan === item.id}
              onClick={() => upgradePlan(item.id)}
            >
              {plan === item.id
                ? "Current Plan"
                : item.id === "enterprise"
                ? "Contact Sales"
                : "Upgrade"}
            </button>

          </div>
        ))}

      </div>

      <div className="pricing-footer">

        <h2>Why choose SellAI?</h2>

        <div className="pricing-benefits">

          <div className="benefit">
            <h3>🚀 AI Powered</h3>
            <p>
              Analyze sales, products and customers using AI.
            </p>
          </div>

          <div className="benefit">
            <h3>📈 Grow Faster</h3>
            <p>
              Increase revenue with intelligent business insights.
            </p>
          </div>

          <div className="benefit">
            <h3>🔒 Secure</h3>
            <p>
              Your data is protected with Firebase Authentication and
              Cloud Firestore.
            </p>
          </div>

          <div className="benefit">
            <h3>⚡ Fast</h3>
            <p>
              Modern React architecture with instant performance.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}