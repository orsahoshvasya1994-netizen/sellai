/*
=========================================
REVENUE FORECAST
=========================================
*/

export function forecastRevenue(revenue = 0) {
  return Math.round(Number(revenue) * 1.15);
}