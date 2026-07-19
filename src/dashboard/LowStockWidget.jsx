import {
  FaExclamationTriangle,
  FaBoxOpen,
} from "react-icons/fa";

import "./LowStockWidget.css";

export default function LowStockWidget({
  products = [],
}) {

  if (!products.length) {
    return (
      <div className="low-stock-card">

        <div className="low-stock-header">

          <h2>
            <FaExclamationTriangle />
            Low Stock
          </h2>

        </div>

        <p className="no-data">
          🎉 All products are sufficiently stocked
        </p>

      </div>
    );
  }

  return (
    <div className="low-stock-card">

      <div className="low-stock-header">

        <h2>
          <FaExclamationTriangle />
          Low Stock
        </h2>

      </div>

      {products.map((product) => (

        <div
          className="stock-item"
          key={product.id}
        >

          <div className="stock-left">

            <FaBoxOpen />

            <div>

              <h4>
                {product.name}
              </h4>

              <p>
                Remaining: {product.stock || 0}
              </p>

            </div>

          </div>

          <span className="danger">
            {product.stock <= 2
              ? "CRITICAL"
              : "LOW"}
          </span>

        </div>

      ))}

    </div>
  );
}