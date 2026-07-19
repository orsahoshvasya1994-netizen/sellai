import "./Features.css";
import { ShoppingBag, Bot, BarChart3, Rocket } from "lucide-react";

const features = [
  {
    icon: <ShoppingBag size={42} />,
    title: "Створи магазин",
    text: "AI створює сучасний інтернет-магазин за кілька хвилин."
  },
  {
    icon: <Bot size={42} />,
    title: "AI автоматизація",
    text: "Генерує описи товарів, SEO, рекламу та контент."
  },
  {
    icon: <BarChart3 size={42} />,
    title: "Аналітика",
    text: "Відстежуй прибуток, продажі та ефективність реклами."
  },
  {
    icon: <Rocket size={42} />,
    title: "Запуск бізнесу",
    text: "Підключай оплату та доставку і починай продавати."
  }
];

export default function Features() {
  return (
    <section className="features">
      <div className="container">

        <h2>
          Як працює <span>SellAI</span>
        </h2>

        <p className="subtitle">
          Все необхідне для запуску онлайн-бізнесу в одному сервісі.
        </p>

        <div className="features-grid">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}