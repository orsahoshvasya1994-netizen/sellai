import {
  FaUser,
  FaBox,
  FaPhone,
  FaMapMarkerAlt,
  FaDollarSign,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import "./OrderCard.css";

export default function OrderCard({
  order,
  onEdit,
  onDelete,
}) {
  const total =
    (Number(order.price) || 0) *
    (Number(order.quantity) || 1);

  const getStatus = () => {
    switch (order.status) {
      case "Нове":
      case "Pending":
        return {
          text: "Pending",
          className: "pending",
        };

      case "В обробці":
      case "Processing":
        return {
          text: "Processing",
          className: "processing",
        };

      case "Відправлено":
      case "Shipped":
        return {
          text: "Shipped",
          className: "shipping",
        };

      case "Доставлено":
      case "Completed":
        return {
          text: "Completed",
          className: "completed",
        };

      case "Скасовано":
      case "Cancelled":
        return {
          text: "Cancelled",
          className: "cancelled",
        };

      default:
        return {
          text: order.status || "Unknown",
          className: "pending",
        };
    }
  };

  const status = getStatus();

  return (
    <div className="order-card">

      <div className="order-top">

        <div>
          <h3>
            <FaUser />
            {order.customer}
          </h3>

          <p>{order.product}</p>
        </div>

        <span className={`status ${status.className}`}>
          {status.text}
        </span>

      </div>

      <div className="order-details">

        <div className="detail">
          <FaBox />
          <span>
            Quantity:
            <strong>{order.quantity}</strong>
          </span>
        </div>

        <div className="detail">
          <FaDollarSign />
          <span>
            Price:
            <strong>${order.price}</strong>
          </span>
        </div>

        <div className="detail">
          <FaDollarSign />
          <span>
            Total:
            <strong>${total.toFixed(2)}</strong>
          </span>
        </div>

        <div className="detail">
          <FaPhone />
          <span>{order.phone}</span>
        </div>

        <div className="detail">
          <FaMapMarkerAlt />
          <span>{order.address}</span>
        </div>

      </div>

      <div className="order-buttons">

        <button
          className="edit-btn"
          onClick={onEdit}
        >
          <FaEdit />
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={onDelete}
        >
          <FaTrash />
          Delete
        </button>

      </div>

    </div>
  );
}