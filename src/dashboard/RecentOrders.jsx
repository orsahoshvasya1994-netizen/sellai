import "./RecentOrders.css";

export default function RecentOrders({
  orders = [],
}) {
  if (!orders.length) {
    return (
      <div className="orders-box">
        <h2>🛒 Recent Orders</h2>

        <p className="no-data">
          No orders found
        </p>
      </div>
    );
  }

  return (
    <div className="orders-box">

      <h2>🛒 Recent Orders</h2>

      {orders.map((order) => (

        <div
          className="order"
          key={order.id}
        >

          <div>

            <span>
              {order.product ||
                order.productName ||
                "Unknown Product"}
            </span>

            <small>
              {order.customer ||
                order.customerName ||
                "Unknown Customer"}
            </small>

          </div>

          <b>
            $
            {Number(
              order.total || 0
            ).toLocaleString()}
          </b>

        </div>

      ))}

    </div>
  );
}