import {
  FaUsers,
  FaUserCheck,
  FaCrown,
  FaDollarSign,
} from "react-icons/fa";

import "./CustomerStats.css";

export default function CustomerStats({ customers }) {
  const totalCustomers = customers.length;

  const activeCustomers = customers.filter(
    (customer) => customer.status === "Active"
  ).length;

  const vipCustomers = customers.filter(
    (customer) => customer.status === "VIP"
  ).length;

  const totalRevenue = customers.reduce(
    (sum, customer) => sum + Number(customer.spent || 0),
    0
  );

  const averageSpent =
    totalCustomers > 0
      ? totalRevenue / totalCustomers
      : 0;

  const stats = [
    {
      title: "Customers",
      value: totalCustomers,
      icon: <FaUsers />,
      className: "blue",
    },
    {
      title: "Active",
      value: activeCustomers,
      icon: <FaUserCheck />,
      className: "green",
    },
    {
      title: "VIP",
      value: vipCustomers,
      icon: <FaCrown />,
      className: "gold",
    },
    {
      title: "Revenue",
      value: `$${totalRevenue.toLocaleString()}`,
      icon: <FaDollarSign />,
      className: "purple",
    },
    {
      title: "Average",
      value: `$${averageSpent.toFixed(2)}`,
      icon: <FaDollarSign />,
      className: "orange",
    },
  ];

  return (
    <div className="customer-stats">

      {stats.map((stat) => (
        <div
          key={stat.title}
          className={`stat-card ${stat.className}`}
        >
          <div className="stat-icon">
            {stat.icon}
          </div>

          <div className="stat-content">

            <h4>{stat.title}</h4>

            <h2>{stat.value}</h2>

          </div>
        </div>
      ))}

    </div>
  );
}