import "./Hero.css";
import hero from "../../assets/hero.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">

        <div className="hero-left">

          <span className="badge">
            🚀 AI Платформа №1
          </span>

          <h1>
            Створюй магазини,
            <br />
            автоматизуй бізнес
            <br />
            та заробляй з AI
          </h1>

          <p>
            Професійна AI-платформа для створення магазинів,
            цифрових продуктів, автоматизації бізнесу та запуску
            власних онлайн-проєктів.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Почати безкоштовно
            </button>

            <button className="secondary-btn">
              Демо
            </button>

          </div>

          <div className="stats">

            <div>
              <h2>10K+</h2>
              <span>Користувачів</span>
            </div>

            <div>
              <h2>500+</h2>
              <span>Проєктів</span>
            </div>

            <div>
              <h2>24/7</h2>
              <span>Підтримка</span>
            </div>

          </div>

        </div>

        <div className="hero-right">
          <img src={hero} alt="SellAI" />
        </div>

      </div>
    </section>
  );
}