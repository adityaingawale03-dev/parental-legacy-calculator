function ExportCSV({ data, motherTotal, fatherTotal, grandTotal }) {
  const handleExport = () => {
    if (!data || data.length === 0) return;

    const rows = [
      ["Factor", "Mother", "Father", "Total"],
      ...data.map((item) => [
        item.factor,
        item.mother.toFixed(3),
        item.father.toFixed(3),
        item.total.toFixed(3),
      ]),
      [],
      ["Mother Total", motherTotal.toFixed(3)],
      ["Father Total", fatherTotal.toFixed(3)],
      ["Grand Total", grandTotal.toFixed(3)],
    ];

    const csvContent = rows
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "parental-legacy-results.csv";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleExport}
      className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-semibold transition"
    >
      📄 Export CSV
    </button>
  );
}

export default ExportCSV;