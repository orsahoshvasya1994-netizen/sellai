import "./DateFilter.css";

export default function DateFilter({
  period,
  setPeriod,
}) {
  const options = [
    "7 Days",
    "30 Days",
    "90 Days",
    "1 Year",
    "All Time",
  ];

  return (
    <div className="date-filter">
      {options.map((item) => (
        <button
          key={item}
          className={period === item ? "active" : ""}
          onClick={() => setPeriod(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}