import "./Customers.css";

export default function Customers() {
  const customers = [
    {
      id: 1,
      name: "Іван Петренко",
      email: "ivan@gmail.com",
      phone: "+380671112233",
      orders: 12,
      spent: "24 850 ₴",
    },
    {
      id: 2,
      name: "Олена Коваль",
      email: "olena@gmail.com",
      phone: "+380661234567",
      orders: 8,
      spent: "17 420 ₴",
    },
    {
      id: 3,
      name: "Андрій Мельник",
      email: "andrii@gmail.com",
      phone: "+380931234567",
      orders: 5,
      spent: "12 300 ₴",
    },
    {
      id: 4,
      name: "Марія Бойко",
      email: "maria@gmail.com",
      phone: "+380991234567",
      orders: 15,
      spent: "35 900 ₴",
    },
    {
      id: 5,
      name: "Василь Орсагош",
      email: "vasyl@gmail.com",
      phone: "+380630682859",
      orders: 21,
      spent: "58 600 ₴",
    },
  ];

  return (
    <div className="customers-page">
      <div className="customers-header">
        <h1>👥 Клієнти</h1>

        <button className="add-btn">
          + Додати клієнта
        </button>
      </div>

      <div className="customers-table">
        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Ім'я</th>
              <th>Email</th>
              <th>Телефон</th>
              <th>Замовлення</th>
              <th>Витрати</th>
            </tr>
          </thead>

          <tbody>

            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.orders}</td>
                <td>{customer.spent}</td>
              </tr>
            ))}

          </tbody>

        </table>
      </div>
    </div>
  );
}