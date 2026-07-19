import { useEffect, useState } from "react";

import "./OrderModal.css";

export default function OrderModal({
  order,
  onClose,
  onSave,
}) {
  const [customer, setCustomer] = useState("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("Нове");

  useEffect(() => {
    if (order) {
      setCustomer(order.customer || "");
      setProduct(order.product || "");
      setPrice(order.price || "");
      setStatus(order.status || "Нове");
    }
  }, [order]);

  const handleSave = () => {
    if (!customer || !product || !price) {
      alert("Заповніть усі поля");
      return;
    }

    onSave({
      customer,
      product,
      price: Number(price),
      status,
    });
  };

  return (
    <div className="modal-overlay">
      <div className="order-modal">
        <h2>
          {order ? "Редагувати замовлення" : "Нове замовлення"}
        </h2>

        <input
          type="text"
          placeholder="Клієнт"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
        />

        <input
          type="text"
          placeholder="Товар"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />

        <input
          type="number"
          placeholder="Сума"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Нове</option>
          <option>Опрацьовується</option>
          <option>Відправлено</option>
          <option>Доставлено</option>
          <option>Скасовано</option>
        </select>

        <div className="modal-buttons">
          <button
            className="cancel"
            onClick={onClose}
          >
            Скасувати
          </button>

          <button
            className="save"
            onClick={handleSave}
          >
            Зберегти
          </button>
        </div>
      </div>
    </div>
  );
}