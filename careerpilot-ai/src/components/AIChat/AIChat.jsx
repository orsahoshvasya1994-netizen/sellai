import { useState } from "react";
import "./AIChat.css";

export default function AIChat() {
  const [messages, setMessages] = useState([
    {
      sender: "assistant",
      text: "👋 Вітаю! Я AI Асистент SellAI. Як я можу допомогти?"
    }
  ]);

  const [input, setInput] = useState("");

  const getAnswer = (question) => {
    const text = question.toLowerCase();

    if (text.includes("ціна") || text.includes("скільки")) {
      return "💰 Ціна залежить від моделі. Уточніть, будь ласка, який товар вас цікавить.";
    }

    if (text.includes("доставка")) {
      return "🚚 Доставка здійснюється Новою Поштою по всій Україні протягом 1–3 днів.";
    }

    if (text.includes("оплата")) {
      return "💳 Ми приймаємо оплату карткою або післяплатою при отриманні.";
    }

    if (text.includes("гарантія")) {
      return "✅ На всі товари діє гарантія та можливість обміну або повернення.";
    }

    if (text.includes("привіт")) {
      return "👋 Вітаю! Чим можу допомогти?";
    }

    if (text.includes("дякую")) {
      return "😊 Завжди радий допомогти!";
    }

    return "🤖 Дякую за повідомлення. Наш менеджер або AI скоро допоможе вам.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    const assistantMessage = {
      sender: "assistant",
      text: getAnswer(input),
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="assistant-page">
      <h1>🤖 AI Асистент</h1>

      <p>Автоматичні відповіді клієнтам SellAI</p>

      <div className="chat-wrapper">

        <div className="chat-header">
          SellAI Assistant
        </div>

        <div className="chat-body">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender}`}
            >
              {message.text}
            </div>
          ))}
        </div>

        <div className="chat-footer">
          <input
            type="text"
            placeholder="Напишіть повідомлення..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button onClick={sendMessage}>
            Надіслати
          </button>
        </div>

      </div>
    </div>
  );
}