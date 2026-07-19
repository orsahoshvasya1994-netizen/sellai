import "./Orders.css";

export default function Orders() {
  const orders = [
    {
      id: "#1001",
      customer: "Іван Петренко",
      product: "Nike Air Max 270",
      price: "2499 ₴",
      status: "✅ Оплачено",
    },
    {
      id: "#1002",
      customer: "Олена Коваль",
      product: "Adidas Samba",
      price: "3199 ₴",
      status: "🚚 Відправлено",
    },
    {
      id: "#1003",
      customer: "Андрій Мельник",
      product: "New Balance 550",
      price: "2899 ₴",
      status: "⏳ Очікує",
    },
    {
      id: "#1004",
      customer: "Марія Бойко",
      product: "Jordan 1 Low",
      price: "4599 ₴",
      status: "✅ Оплачено",
    },
    {
      id: "#1005",
      customer: "Василь Орсагош",
      product: "Nike Dunk Low",
      price: "3799 ₴",
      status: "📦 Упаковка",
    },
  ];

  return (
    <div className="orders-page">

      <div className="orders-header">

        <h1>🛒 Замовлення</h1>

        <button className="add-order">
          + Нове замовлення
        </button>

      </div>

      <div className="orders-table">

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Клієнт</th>
              <th>Товар</th>
              <th>Сума</th>
              <th>Статус</th>
            </tr>
          </thead>

          <tbody>

            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td>{order.price}</td>
                <td>{order.status}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}