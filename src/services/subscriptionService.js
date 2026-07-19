import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "../firebase";

/**
 * Save user subscription plan
 */
export async function savePlan(plan) {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User not authenticated");
  }

  await setDoc(
    doc(db, "users", user.uid),
    {
      email: user.email,
      plan,
      subscriptionStatus: "active",
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
}

/**
 * Load user subscription plan
 */
export async function loadPlan() {
  const user = auth.currentUser;

  if (!user) {
    return "free";
  }

  const docRef = doc(db, "users", user.uid);
  const snap = await getDoc(docRef);

  if (!snap.exists()) {
    return "free";
  }

  const data = snap.data();

  return data.plan || "free";
}

/**
 * Reset subscription
 */
export async function resetPlan() {
  const user = auth.currentUser;

  if (!user) return;

  await setDoc(
    doc(db, "users", user.uid),
    {
      plan: "free",
      subscriptionStatus: "inactive",
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
}