import {
    createContext,
    useContext,
    useState,
    useEffect,
} from "react";

import {
    loadPlan,
    savePlan,
} from "../../services/subscriptionService";

const SubscriptionContext = createContext();

export function SubscriptionProvider({ children }) {
    const [plan, setPlan] = useState("free");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function initializeSubscription() {
            try {
                const savedPlan = await loadPlan();
                setPlan(savedPlan);
            } catch (error) {
                console.error("Failed to load subscription:", error);
            } finally {
                setLoading(false);
            }
        }

        initializeSubscription();
    }, []);

    const upgradePlan = async (newPlan) => {
        try {
            setPlan(newPlan);
            await savePlan(newPlan);
        } catch (error) {
            console.error("Failed to save subscription:", error);
        }
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
        loading,
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