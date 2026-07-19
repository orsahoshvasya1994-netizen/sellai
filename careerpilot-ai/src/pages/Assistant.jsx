import AIChat from "../components/AIChat/AIChat";
import "./Assistant.css";

export default function Assistant() {
  return (
    <div className="assistant-page">

      <div className="assistant-header">
        <h1>🤖 AI Асистент SellAI</h1>

        <p>
          Ваш персональний AI-помічник для роботи з клієнтами,
          товарами, продажами та замовленнями.
        </p>
      </div>

      <div className="assistant-features">

        <div className="feature-card">
          <h3>💬 Відповіді клієнтам</h3>
          <p>
            AI допомагає відповідати на питання покупців.
          </p>
        </div>

        <div className="feature-card">
          <h3>📝 Описи товарів</h3>
          <p>
            Генерує професійні продаючі описи.
          </p>
        </div>

        <div className="feature-card">
          <h3>📊 Аналіз продажів</h3>
          <p>
            Допомагає аналізувати статистику магазину.
          </p>
        </div>

        <div className="feature-card">
          <h3>🚀 AI Рекомендації</h3>
          <p>
            Дає поради щодо розвитку бізнесу.
          </p>
        </div>

      </div>

      <AIChat />

    </div>
  );
}