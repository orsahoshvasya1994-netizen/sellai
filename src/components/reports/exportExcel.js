import * as XLSX from "xlsx";

export function exportExcel(stats, insights) {
  const sheetData = [
    ["SellAI Enterprise Report"],
    [""],

    ["Revenue", stats.revenue],
    ["Profit", stats.profit],
    ["Orders", stats.orders],
    ["Customers", stats.customers],
    ["Forecast", stats.forecast],

    [""],
    ["AI Insights"],

    ...insights.map((item) => [item]),

    [""],
    ["Generated", new Date().toLocaleString()],
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(sheetData);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Analytics"
  );

  XLSX.writeFile(
    workbook,
    "SellAI_Report.xlsx"
  );
}