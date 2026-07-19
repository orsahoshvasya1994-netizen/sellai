import { useEffect, useState } from "react";
import "./CustomerModal.css";

const initialState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  country: "",
  orders: 0,
  spent: 0,
  avatar: "",
  lastOrder: "",
  status: "Active",
};

export default function CustomerModal({
  customer,
  onClose,
  onSave,
}) {
  const [form, setForm] = useState(initialState);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (customer) {
      setForm({
        ...initialState,
        ...customer,
      });
    } else {
      setForm(initialState);
    }
  }, [customer]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "orders" || name === "spent"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      alert("Please enter customer name.");
      return;
    }

    if (!form.email.trim()) {
      alert("Please enter email.");
      return;
    }

    if (form.orders < 0) {
      alert("Orders cannot be negative.");
      return;
    }

    if (form.spent < 0) {
      alert("Spent cannot be negative.");
      return;
    }

    setSaving(true);

    try {
      await onSave(form);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="customer-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>
          {customer
            ? "Edit Customer"
            : "Add Customer"}
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
          />

          <input
            type="text"
            name="country"
            placeholder="Country"
            value={form.country}
            onChange={handleChange}
          />

          <input
            type="number"
            name="orders"
            placeholder="Orders"
            min="0"
            value={form.orders}
            onChange={handleChange}
          />

          <input
            type="number"
            name="spent"
            placeholder="Total Spent"
            min="0"
            step="0.01"
            value={form.spent}
            onChange={handleChange}
          />

          <input
            type="url"
            name="avatar"
            placeholder="Avatar URL"
            value={form.avatar}
            onChange={handleChange}
          />

          <input
            type="date"
            name="lastOrder"
            value={form.lastOrder}
            onChange={handleChange}
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option value="Active">
              Active
            </option>

            <option value="Inactive">
              Inactive
            </option>

            <option value="VIP">
              VIP
            </option>
          </select>

          <div className="modal-actions">

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
              disabled={saving}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
              disabled={saving}
            >
              {saving
                ? "Saving..."
                : customer
                ? "Update Customer"
                : "Add Customer"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}