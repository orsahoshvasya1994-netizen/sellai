import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLIC_KEY
);

export async function checkout(plan) {
  try {
    const stripe = await stripePromise;

    /*
      Тут пізніше буде звернення
      до Firebase Function або Backend,
      який створить Checkout Session.
    */

    const fakeSession = {
      starter: "https://buy.stripe.com/test_starter",
      pro: "https://buy.stripe.com/test_pro",
      business: "https://buy.stripe.com/test_business",
    };

    const url = fakeSession[plan];

    if (!url) {
      alert("Unknown subscription plan.");
      return;
    }

    window.location.href = url;

  } catch (error) {
    console.error(error);

    alert("Unable to connect to Stripe.");
  }
}