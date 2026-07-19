import "./Dashboard.css";
import SalesChart from "../SalesChart/SalesChart";

export default function Dashboard() {
  return (
    <div className="dashboard-content">
      <h1>Dashboard</h1>

      <p className="subtitle">
        Ласкаво просимо до SellAI 🚀
      </p>

      <div className="cards">
        <div className="card">
          <h3>💰 Дохід</h3>
          <h2>24 850 ₴</h2>
          <span>+18% за місяць</span>
        </div>

        <div className="card">
          <h3>🛒 Замовлення</h3>
          <h2>143</h2>
          <span>12 сьогодні</span>
        </div>

        <div className="card">
          <h3>👥 Клієнти</h3>
          <h2>98</h2>
          <span>+9 нових</span>
        </div>

        <div className="card">
          <h3>📦 Товари</h3>
          <h2>57</h2>
          <span>У каталозі</span>
        </div>
      </div>

      <div className="chart-box">
        <h2>📈 Продажі</h2>
        <SalesChart />
      </div>

      <div className="orders">
        <h2>Останні замовлення</h2>

        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Клієнт</th>
              <th>Товар</th>
              <th>Сума</th>
              <th>Статус</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#1001</td>
              <td>Іван Петренко</td>
              <td>Nike Air Max</td>
              <td>4 200 ₴</td>
              <td>✅ Виконано</td>
            </tr>

            <tr>
              <td>#1002</td>
              <td>Олена Коваль</td>
              <td>Adidas Campus</td>
              <td>3 650 ₴</td>
              <td>🚚 Відправлено</td>
            </tr>

            <tr>
              <td>#1003</td>
              <td>Андрій Мельник</td>
              <td>New Balance 530</td>
              <td>4 890 ₴</td>
              <td>⏳ Очікує</td>
            </tr>

            <tr>
              <td>#1004</td>
              <td>Марія Бойко</td>
              <td>Puma RS-X</td>
              <td>3 980 ₴</td>
              <td>✅ Виконано</td>
            </tr>

            <tr>
              <td>#1005</td>
              <td>Василь Орсагош</td>
              <td>Jordan 1 Low</td>
              <td>5 600 ₴</td>
              <td>🚚 Доставка</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}