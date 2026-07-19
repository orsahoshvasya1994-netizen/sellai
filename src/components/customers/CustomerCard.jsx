import {
  FaEdit,
  FaTrash,
  FaEnvelope,
  FaPhone,
  FaShoppingBag,
  FaDollarSign,
  FaUserCircle,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

import "./CustomerCard.css";

export default function CustomerCard({
  customer,
  onEdit,
  onDelete,
}) {
  const {
    name,
    email,
    phone,
    city,
    country,
    orders,
    spent,
    status,
    avatar,
    joined,
  } = customer;

  const getStatusClass = () => {
    switch (status?.toLowerCase()) {
      case "vip":
        return "vip";

      case "inactive":
        return "inactive";

      default:
        return "active";
    }
  };

  const avatarUrl =
    avatar ||
    `https://ui-avatars.com/api/?background=6d5dfc&color=fff&name=${encodeURIComponent(
      name
    )}`;

  return (
    <div className="customer-card">
      <div className="customer-top">
        <div className="customer-avatar">
          <img src={avatarUrl} alt={name} />
        </div>

        <div>
          <h3>
            {name}

            {status === "VIP" && (
              <span className="vip-badge">
                VIP
              </span>
            )}
          </h3>

          <span className={`status ${getStatusClass()}`}>
            {status}
          </span>
        </div>
      </div>

      <div className="customer-info">
        <p>
          <FaEnvelope />
          {email}
        </p>

        <p>
          <FaPhone />
          {phone}
        </p>

        <p>
          <FaMapMarkerAlt />
          {city}, {country}
        </p>

        <p>
          <FaCalendarAlt />
          Joined: {joined || "-"}
        </p>
      </div>

      <div className="customer-stats">
        <div>
          <FaShoppingBag />

          <span>Orders</span>

          <strong>{orders}</strong>
        </div>

        <div>
          <FaDollarSign />

          <span>Spent</span>

          <strong>
            ${Number(spent).toLocaleString()}
          </strong>
        </div>
      </div>

      <div className="customer-actions">
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