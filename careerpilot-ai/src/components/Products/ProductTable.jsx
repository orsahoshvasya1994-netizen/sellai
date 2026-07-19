import "./Products.css";

export default function ProductTable({ products }) {
  return (
    <div className="product-table">
      <table>
        <thead>
          <tr>
            <th>Фото</th>
            <th>Назва</th>
            <th>Категорія</th>
            <th>Ціна</th>
            <th>Залишок</th>
            <th>Статус</th>
            <th>Дії</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  className="table-image"
                />
              </td>

              <td>{product.name}</td>

              <td>{product.category}</td>

              <td>{product.price} ₴</td>

              <td>{product.stock}</td>

              <td>
                {product.stock > 0 ? (
                  <span className="status in">
                    В наявності
                  </span>
                ) : (
                  <span className="status out">
                    Немає
                  </span>
                )}
              </td>

              <td>
                <button className="edit-btn">
                  ✏️
                </button>

                <button className="delete-btn">
                  🗑
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}