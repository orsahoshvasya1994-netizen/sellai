import jsPDF from "jspdf";

export function exportPDF(report) {
  const pdf = new jsPDF();

  const lines = report.split("\n");

  let y = 20;

  pdf.setFont("courier");

  pdf.setFontSize(11);

  lines.forEach((line) => {
    if (y > 280) {
      pdf.addPage();
      y = 20;
    }

    pdf.text(line, 10, y);

    y += 7;
  });

  pdf.save("SellAI_Report.pdf");
}