import { Navigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";

import { useSubscription } from "../context/SubscriptionContext";

import "./FeatureGuard.css";

export default function FeatureGuard({
  children,
  feature = "",
}) {
  const {
    loading,
    isPremium,
  } = useSubscription();

  if (loading) {
    return (
      <div className="feature-loading">
        Loading...
      </div>
    );
  }

  if (isPremium) {
    return children;
  }

  return (
    <div className="feature-lock">

      <div className="lock-icon">
        <FaLock />
      </div>

      <h2>Premium Feature</h2>

      <p>
        "{feature}" is available only
        for PRO and BUSINESS users.
      </p>

      <NavigateButton />

    </div>
  );
}

function NavigateButton() {
  return (
    <button
      className="upgrade-button"
      onClick={() => {
        window.location.href = "/pricing";
      }}
    >
      Upgrade Plan
    </button>
  );
}