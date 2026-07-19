import {
  FaPlus,
  FaSearch,
} from "react-icons/fa";

import "./CustomerToolbar.css";

export default function CustomerToolbar({
  search,
  setSearch,

  status,
  setStatus,

  sortBy,
  setSortBy,

  onAddCustomer,
}) {
  return (
    <div className="customer-toolbar">

      <div className="search-box">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search customer..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
      >
        <option value="all">
          All Status
        </option>

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

      <select
        value={sortBy}
        onChange={(e) =>
          setSortBy(e.target.value)
        }
      >
        <option value="name-asc">
          Name A → Z
        </option>

        <option value="name-desc">
          Name Z → A
        </option>

        <option value="spent-desc">
          Highest Spending
        </option>

        <option value="spent-asc">
          Lowest Spending
        </option>

        <option value="orders-desc">
          Most Orders
        </option>

        <option value="orders-asc">
          Least Orders
        </option>
      </select>

      <button
        className="add-customer-btn"
        onClick={onAddCustomer}
      >
        <FaPlus />
        Add Customer
      </button>

    </div>
  );
}