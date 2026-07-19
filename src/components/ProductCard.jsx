import "./ProductCard.css";

import {
  FaEdit,
  FaTrash,
  FaTag,
  FaBoxOpen,
  FaStar,
} from "react-icons/fa";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900";

export default function ProductCard({
  product,
  onEdit,
  onDelete,
}) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={product.image || DEFAULT_IMAGE}
          alt={product.name}
          onError={(e) => {
            e.target.src = DEFAULT_IMAGE;
          }}
        />

        <span
          className={
            Number(product.stock) > 0
              ? "badge in-stock"
              : "badge out-stock"
          }
        >
          {Number(product.stock) > 0
            ? "In Stock"
            : "Out of Stock"}
        </span>
      </div>

      <div className="product-content">
        <h3>{product.name}</h3>

        <p className="category">
          <FaTag />
          {product.category}
        </p>

        <h2 className="price">
          $
          {Number(product.price).toFixed(2)}
        </h2>

        <p className="stock">
          <FaBoxOpen />
          Stock: {product.stock}
        </p>

        <div className="rating">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span>5.0</span>
        </div>

        <div className="product-actions">
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
    </div>
  );
}