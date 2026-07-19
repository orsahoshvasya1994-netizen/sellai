import "./AIInsights.css";

export default function AIInsights() {
  return (
    <div className="ai-insights">

      <div className="ai-header">
        <h2>🤖 AI Insights</h2>
        <span className="ai-live">LIVE</span>
      </div>

      <div className="insight success">
        <h3>📈 Sales Growth</h3>
        <p>Продажі зросли на <strong>18.4%</strong> порівняно з минулим місяцем.</p>
      </div>

      <div className="insight warning">
        <h3>📦 Inventory</h3>
        <p>7 товарів скоро закінчаться. Рекомендується поповнити склад.</p>
      </div>

      <div className="insight info">
        <h3>👥 Customers</h3>
        <p>Кількість нових клієнтів збільшилась на 12% цього тижня.</p>
      </div>

      <div className="insight purple">
        <h3>💰 Forecast</h3>
        <p>Очікуваний дохід наступного місяця — <strong>$168,000</strong>.</p>
      </div>

    </div>
  );
}