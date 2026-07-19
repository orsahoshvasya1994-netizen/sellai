/*
=========================================
AI INSIGHTS
=========================================
*/

export function generateInsights(stats = {}) {
  const insights = [];

  const revenue = Number(stats.revenue || 0);
  const orders = Number(stats.orders || 0);
  const customers = Number(stats.customers || 0);
  const profit = Number(stats.profit || 0);

  if (revenue > 10000) {
    insights.push("📈 Revenue is growing steadily.");
  }

  if (orders > 100) {
    insights.push("🔥 Sales volume is above average.");
  }

  if (customers > 50) {
    insights.push("👥 Customer base continues to grow.");
  }

  if (profit > 5000) {
    insights.push("💰 Business profitability is healthy.");
  }

  if (insights.length === 0) {
    insights.push("ℹ️ No significant trends detected yet.");
  }

  return insights;
}