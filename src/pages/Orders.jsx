import { useEffect, useState } from "react";

import OrderCard from "../components/OrderCard";
import OrderModal from "../components/OrderModal";

import {
  getOrders,
  addOrder,
  updateOrder,
  deleteOrder,
} from "../services/orderService";

import "./Orders.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const [modalOpen, setModalOpen] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);

  const loadOrders = async () => {
    try {
      setLoading(true);

      const data = await getOrders();

      setOrders(data);
      setFilteredOrders(data);
    } catch (error) {
      console.error("Помилка завантаження замовлень:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  useEffect(() => {
    let result = [...orders];

    if (search) {
      result = result.filter(
        (order) =>
          order.customer
            ?.toLowerCase()
            .includes(search.toLowerCase()) ||
          order.product
            ?.toLowerCase()
            .includes(search.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      result = result.filter(
        (order) => order.status === statusFilter
      );
    }

    setFilteredOrders(result);
  }, [orders, search, statusFilter]);

  const openCreateModal = () => {
    setEditingOrder(null);
    setModalOpen(true);
  };

  const openEditModal = (order) => {
    setEditingOrder(order);
    setModalOpen(true);
  };

  const removeOrder = async (id) => {
    if (!window.confirm("Видалити замовлення?")) return;

    try {
      await deleteOrder(id);
      loadOrders();
    } catch (error) {
      console.error(error);
    }
  };

  const saveOrder = async (order) => {
    try {
      if (editingOrder) {
        await updateOrder(editingOrder.id, order);
      } else {
        await addOrder(order);
      }

      setModalOpen(false);
      loadOrders();
    } catch (error) {
      console.error(error);
    }
  };

  const revenue = orders.reduce(
    (sum, order) => sum + (Number(order.total) || 0),
    0
  );

  return (
    <div className="orders-page">

      <div className="orders-header">

        <div>
          <h1>📦 Orders</h1>
          <p>Manage customer orders</p>
        </div>

        <button
          className="add-order-btn"
          onClick={openCreateModal}
        >
          + New Order
        </button>

      </div>

      <div className="orders-stats">

        <div className="order-stat">
          <h3>Total Orders</h3>
          <h2>{orders.length}</h2>
          <span>All Orders</span>
        </div>

        <div className="order-stat">
          <h3>Total Revenue</h3>
          <h2>${revenue.toLocaleString()}</h2>
          <span>Income</span>
        </div>

        <div className="order-stat">
          <h3>Pending</h3>
          <h2>
            {
              orders.filter(
                (o) => o.status === "Pending"
              ).length
            }
          </h2>
          <span>Need Action</span>
        </div>

        <div className="order-stat">
          <h3>Completed</h3>
          <h2>
            {
              orders.filter(
                (o) => o.status === "Completed"
              ).length
            }
          </h2>
          <span>Finished</span>
        </div>

      </div>

      <div className="orders-toolbar">

        <input
          className="search-input"
          type="text"
          placeholder="🔍 Search orders..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          className="filter-select"
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
        >
          <option value="all">
            All Statuses
          </option>

          <option value="Pending">
            Pending
          </option>

          <option value="Completed">
            Completed
          </option>

          <option value="Cancelled">
            Cancelled
          </option>

        </select>

      </div>

      {loading ? (
        <div className="loading">
          Loading...
        </div>
      ) : (
        <div className="orders-grid">

          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                onEdit={() =>
                  openEditModal(order)
                }
                onDelete={() =>
                  removeOrder(order.id)
                }
              />
            ))
          ) : (
            <div className="loading">
              No orders found.
            </div>
          )}

        </div>
      )}

      {modalOpen && (
        <OrderModal
          order={editingOrder}
          onClose={() =>
            setModalOpen(false)
          }
          onSave={saveOrder}
        />
      )}

    </div>
  );
}