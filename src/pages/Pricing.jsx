import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaCheck,
  FaRocket,
  FaCrown,
  FaBuilding,
  FaArrowLeft,
} from "react-icons/fa";

import "./Pricing.css";
import { checkout } from "../services/stripe";

export default function Pricing() {
  const navigate = useNavigate();

  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      id: "starter",
      title: "Starter",
      icon: <FaRocket />,
      color: "#4f8cff",
      monthly: 19,
      yearly: 190,
      description:
        "Perfect for freelancers and small online stores.",
      features: [
        "100 Products",
        "500 Orders",
        "100 Customers",
        "Dashboard",
        "Basic Analytics",
        "Cloud Storage",
        "Email Support",
      ],
    },

    {
      id: "pro",
      title: "Pro",
      icon: <FaCrown />,
      color: "#6d5dfc",
      popular: true,
      monthly: 49,
      yearly: 490,
      description:
        "Best choice for growing businesses.",
      features: [
        "Unlimited Products",
        "Unlimited Orders",
        "Unlimited Customers",
        "Advanced Analytics",
        "AI Assistant",
        "Revenue Forecast",
        "AI Reports",
        "PDF Export",
        "Excel Export",
        "Priority Support",
      ],
    },

    {
      id: "business",
      title: "Business",
      icon: <FaBuilding />,
      color: "#22c55e",
      monthly: 99,
      yearly: 990,
      description:
        "Complete AI platform for enterprises.",
      features: [
        "Everything in Pro",
        "Unlimited Team Members",
        "API Access",
        "White Label",
        "Advanced Forecasting",
        "Dedicated Manager",
        "24/7 Support",
        "Custom Reports",
        "AI Automation",
      ],
    },
  ];

  const subscribe = async (plan) => {
    await checkout(plan);
  };

  return (
    <div className="pricing-page">

      <div className="pricing-top">

        <button
          className="back-dashboard"
          onClick={() => navigate("/dashboard")}
        >
          <FaArrowLeft />
          Dashboard
        </button>

        <h1>SellAI Pricing</h1>

        <p>
          Choose the best subscription for your business.
        </p>

      </div>

      <div className="billing-switch">

        <button
          className={
            billing === "monthly"
              ? "active"
              : ""
          }
          onClick={() =>
            setBilling("monthly")
          }
        >
          Monthly
        </button>

        <button
          className={
            billing === "yearly"
              ? "active"
              : ""
          }
          onClick={() =>
            setBilling("yearly")
          }
        >
          Yearly
          <span>Save 20%</span>
        </button>

      </div>

      <div className="pricing-grid">

        {plans.map((plan) => (

          <div
            key={plan.id}
            className={`pricing-card ${
              plan.popular
                ? "popular"
                : ""
            }`}
          >

            {plan.popular && (
              <div className="popular">
                MOST POPULAR
              </div>
            )}

            <div
              className="plan-icon"
              style={{
                background:
                  plan.color,
              }}
            >
              {plan.icon}
            </div>

            <h2>{plan.title}</h2>

            <p className="description">
              {plan.description}
            </p>

            <div className="price">

              <span>

                $

                {billing === "monthly"
                  ? plan.monthly
                  : plan.yearly}

              </span>

              <small>

                /

                {billing === "monthly"
                  ? "month"
                  : "year"}

              </small>

            </div>

            <ul>

              {plan.features.map(
                (item, index) => (
                  <li key={index}>
                    <FaCheck />
                    {item}
                  </li>
                )
              )}

            </ul>

            <button
              className="subscribe-btn"
              onClick={() =>
                subscribe(plan.id)
              }
            >
              Subscribe
            </button>

          </div>

        ))}

      </div>      <section className="pricing-benefits">

        <h2>Why choose SellAI?</h2>

        <div className="benefits-grid">

          <div className="benefit-card">
            <h3>🤖 AI Assistant</h3>

            <p>
              Get instant business insights powered
              by artificial intelligence.
            </p>
          </div>

          <div className="benefit-card">
            <h3>📊 Advanced Analytics</h3>

            <p>
              Monitor revenue, profit, customers
              and sales performance in real time.
            </p>
          </div>

          <div className="benefit-card">
            <h3>☁ Secure Cloud</h3>

            <p>
              Your data is securely stored using
              Firebase and Cloudinary.
            </p>
          </div>

        </div>

      </section>

      <section className="pricing-faq">

        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">

          <h3>Can I cancel anytime?</h3>

          <p>
            Yes. You can cancel your subscription
            at any moment from the Billing page.
          </p>

        </div>

        <div className="faq-item">

          <h3>Is there a free trial?</h3>

          <p>
            Yes. Every new user starts with the
            Free plan and can upgrade whenever
            needed.
          </p>

        </div>

        <div className="faq-item">

          <h3>Which payment methods are supported?</h3>

          <p>
            Credit cards, Apple Pay, Google Pay
            and other Stripe-supported payment
            methods.
          </p>

        </div>

      </section>

      <section className="pricing-guarantee">

        <div className="guarantee-box">

          <h2>30-Day Money Back Guarantee</h2>

          <p>
            If SellAI doesn't help your business,
            we'll refund your payment within
            the first 30 days.
          </p>

        </div>

      </section>

      <footer className="pricing-footer">

        <p>
          © 2026 SellAI.
          All rights reserved.
        </p>

      </footer>

    </div>
  );
}