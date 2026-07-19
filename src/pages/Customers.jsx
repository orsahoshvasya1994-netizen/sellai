import { useMemo, useState } from "react";
import "./Customers.css";

import CustomerStats from "../components/customers/CustomerStats";
import CustomerToolbar from "../components/customers/CustomerToolbar";
import CustomerCard from "../components/customers/CustomerCard";
import CustomerModal from "../components/customers/CustomerModal";

import useCustomers from "../hooks/useCustomers";

import {
  addCustomer,
  updateCustomer,
  deleteCustomer,
} from "../services/customersService";

export default function Customers() {
  const { customers, loading } = useCustomers();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [sortBy, setSortBy] = useState("name-asc");

  const [modalOpen, setModalOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);

  const filteredCustomers = useMemo(() => {
    let result = [...customers];

    if (search.trim()) {
      result = result.filter((customer) =>
        customer.name
          ?.toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    if (status !== "all") {
      result = result.filter(
        (customer) => customer.status === status
      );
    }

    switch (sortBy) {
      case "name-desc":
        result.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        break;

      case "spent-desc":
        result.sort(
          (a, b) =>
            Number(b.spent || 0) -
            Number(a.spent || 0)
        );
        break;

      case "spent-asc":
        result.sort(
          (a, b) =>
            Number(a.spent || 0) -
            Number(b.spent || 0)
        );
        break;

      case "orders-desc":
        result.sort(
          (a, b) =>
            Number(b.orders || 0) -
            Number(a.orders || 0)
        );
        break;

      case "orders-asc":
        result.sort(
          (a, b) =>
            Number(a.orders || 0) -
            Number(b.orders || 0)
        );
        break;

      default:
        result.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
    }

    return result;
  }, [
    customers,
    search,
    status,
    sortBy,
  ]);

  const openCreateModal = () => {
    setEditingCustomer(null);
    setModalOpen(true);
  };

  const openEditModal = (customer) => {
    setEditingCustomer(customer);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingCustomer(null);
  };

  const saveCustomer = async (customer) => {
    try {
      if (editingCustomer) {
        await updateCustomer(
          editingCustomer.id,
          customer
        );
      } else {
        await addCustomer(customer);
      }

      closeModal();
    } catch (error) {
      console.error(error);
      alert("Unable to save customer.");
    }
  };

  const removeCustomer = async (id) => {
    if (!window.confirm("Delete this customer?")) return;

    try {
      await deleteCustomer(id);
    } catch (error) {
      console.error(error);
      alert("Unable to delete customer.");
    }
  };  return (
    <div className="customers-page">

      <CustomerStats customers={filteredCustomers} />

      <CustomerToolbar
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onAddCustomer={openCreateModal}
      />

      {loading ? (

        <div className="customers-loading">
          Loading customers...
        </div>

      ) : filteredCustomers.length === 0 ? (

        <div className="customers-empty">

          <h2>No customers found</h2>

          <p>
            Try changing the search or add a new customer.
          </p>

          <button
            className="empty-btn"
            onClick={openCreateModal}
          >
            + Add Customer
          </button>

        </div>

      ) : (

        <div className="customers-grid">

          {filteredCustomers.map((customer) => (

            <CustomerCard
              key={customer.id}
              customer={customer}
              onEdit={() => openEditModal(customer)}
              onDelete={() => removeCustomer(customer.id)}
            />

          ))}

        </div>

      )}

      {modalOpen && (

        <CustomerModal
          customer={editingCustomer}
          onClose={closeModal}
          onSave={saveCustomer}
        />

      )}

    </div>
  );
}