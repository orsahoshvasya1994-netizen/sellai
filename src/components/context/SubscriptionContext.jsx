import { createContext, useContext, useState } from "react";

const SubscriptionContext = createContext();

export function SubscriptionProvider({ children }) {
    const [plan, setPlan] = useState("free");

    const upgradePlan = (newPlan) => {
        setPlan(newPlan);
    };

    const isFree = plan === "free";
    const isPro = plan === "pro";
    const isBusiness = plan === "business";

    const value = {
        plan,
        setPlan,
        upgradePlan,
        isFree,
        isPro,
        isBusiness,
    };

    return (
        <SubscriptionContext.Provider value={value}>
            {children}
        </SubscriptionContext.Provider>
    );
}

export function useSubscription() {
    const context = useContext(SubscriptionContext);

    if (!context) {
        throw new Error(
            "useSubscription must be used inside SubscriptionProvider"
        );
    }

    return context;
}