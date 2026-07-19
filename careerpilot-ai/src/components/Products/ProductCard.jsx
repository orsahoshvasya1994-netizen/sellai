import "./Products.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

        <p className="product-category">
          {product.category}
        </p>

        <h2>{product.price} ₴</h2>

        <div className="product-stock">
          {product.stock > 0 ? (
            <span className="in-stock">
              ✅ В наявності ({product.stock})
            </span>
          ) : (
            <span className="out-stock">
              ❌ Немає в наявності
            </span>
          )}
        </div>

        <div className="product-buttons">
          <button className="edit-btn">
            ✏️ Редагувати
          </button>

          <button className="delete-btn">
            🗑 Видалити
          </button>
        </div>
      </div>
    </div>
  );
}