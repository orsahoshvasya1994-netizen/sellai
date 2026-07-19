import "./RecentOrders.css";

export default function RecentOrders() {
  const orders = [
    {
      id: "#1001",
      customer: "Іван Петренко",
      product: "Nike Air Max",
      status: "Виконано",
    },
    {
      id: "#1002",
      customer: "Олена Коваль",
      product: "Adidas Ultraboost",
      status: "В обробці",
    },
    {
      id: "#1003",
      customer: "Максим Шевченко",
      product: "Puma RS-X",
      status: "Доставлено",
    },
  ];

  return (
    <div className="orders-box">
      <h2>Останні замовлення</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Клієнт</th>
            <th>Товар</th>
            <th>Статус</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.product}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}