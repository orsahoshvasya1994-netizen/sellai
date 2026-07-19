export async function getReportData(stats, insights) {
  return {
    date: new Date().toLocaleString(),

    revenue: stats.revenue,

    profit: stats.profit,

    orders: stats.orders,

    customers: stats.customers,

    forecast: stats.forecast,

    insights,
  };
}