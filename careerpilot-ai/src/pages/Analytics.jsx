import "./Analytics.css";

export default function Analytics() {
  const stats = [
    {
      title: "💰 Дохід",
      value: "245 800 ₴",
      growth: "+18%",
    },
    {
      title: "🛒 Продажі",
      value: "1 284",
      growth: "+12%",
    },
    {
      title: "👥 Клієнти",
      value: "582",
      growth: "+8%",
    },
    {
      title: "📦 Товари",
      value: "312",
      growth: "+24%",
    },
  ];

  return (
    <div className="analytics-page">

      <div className="analytics-header">
        <h1>📈 Аналітика</h1>

        <p>
          Повна статистика роботи магазину SellAI
        </p>
      </div>

      {/* Картки */}
      <div className="analytics-cards">

        {stats.map((item, index) => (
          <div className="analytics-card" key={index}>
            <h3>{item.title}</h3>

            <h2>{item.value}</h2>

            <span>{item.growth} за місяць</span>
          </div>
        ))}

      </div>

      {/* Графік */}
      <div className="analytics-grid">

        <div className="analytics-box">

          <h2>📊 Продажі</h2>

          <div className="fake-chart">

            <div className="bar" style={{ height: "55%" }}></div>

            <div className="bar" style={{ height: "75%" }}></div>

            <div className="bar" style={{ height: "40%" }}></div>

            <div className="bar" style={{ height: "90%" }}></div>

            <div className="bar" style={{ height: "65%" }}></div>

            <div className="bar" style={{ height: "80%" }}></div>

            <div className="bar" style={{ height: "100%" }}></div>

          </div>

        </div>

        <div className="analytics-box">

          <h2>🔥 ТОП товари</h2>

          <ul>

            <li>
              Nike Air Max
              <span>124</span>
            </li>

            <li>
              Adidas Samba
              <span>98</span>
            </li>

            <li>
              Jordan 1 Low
              <span>87</span>
            </li>

            <li>
              New Balance 530
              <span>72</span>
            </li>

            <li>
              Puma RS-X
              <span>61</span>
            </li>

          </ul>

        </div>

      </div>

      {/* Таблиця */}
      <div className="analytics-table">

        <h2>📅 Статистика по місяцях</h2>

        <table>

          <thead>

            <tr>
              <th>Місяць</th>
              <th>Продажі</th>
              <th>Дохід</th>
              <th>Клієнти</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>Січень</td>
              <td>185</td>
              <td>126 000 ₴</td>
              <td>72</td>
            </tr>

            <tr>
              <td>Лютий</td>
              <td>214</td>
              <td>154 000 ₴</td>
              <td>89</td>
            </tr>

            <tr>
              <td>Березень</td>
              <td>257</td>
              <td>181 400 ₴</td>
              <td>110</td>
            </tr>

            <tr>
              <td>Квітень</td>
              <td>301</td>
              <td>214 900 ₴</td>
              <td>143</td>
            </tr>

            <tr>
              <td>Травень</td>
              <td>347</td>
              <td>245 800 ₴</td>
              <td>165</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}