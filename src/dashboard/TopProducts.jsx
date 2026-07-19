import "./TopProducts.css";

export default function TopProducts({
  products = [],
}) {
  if (!products.length) {
    return (
      <div className="top-products">
        <div className="top-header">
          <h2>🏆 Top Products</h2>
        </div>

        <p className="no-data">
          No products available
        </p>
      </div>
    );
  }

  const maxSold = Math.max(
    ...products.map((p) => Number(p.sold || 0)),
    1
  );

  return (
    <div className="top-products">

      <div className="top-header">
        <h2>🏆 Top Products</h2>
      </div>

      {products.map((product) => {

        const sold = Number(product.sold || 0);

        const revenue =
          Number(product.price || 0) * sold;

        const percent = Math.round(
          (sold / maxSold) * 100
        );

        return (
          <div
            key={product.id}
            className="product-item"
          >
            <div className="product-info">

              <h3>
                {product.name}
              </h3>

              <span>
                ${revenue.toLocaleString()}
              </span>

            </div>

            <div className="progress">

              <div
                className="progress-fill"
                style={{
                  width: `${percent}%`,
                }}
              />

            </div>

            <div className="percent">
              {percent}%
            </div>

          </div>
        );

      })}

    </div>
  );
}