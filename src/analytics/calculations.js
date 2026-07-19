/*
=========================================
REVENUE
=========================================
*/

export function calculateRevenue(orders = []) {
  return orders.reduce((sum, order) => {
    return sum + Number(order.total || 0);
  }, 0);
}

/*
=========================================
ORDERS COUNT
=========================================
*/

export function calculateOrders(orders = []) {
  return orders.length;
}

/*
=========================================
CUSTOMERS COUNT
=========================================
*/

export function calculateCustomers(customers = []) {
  return customers.length;
}

/*
=========================================
PROFIT
=========================================
*/

export function calculateProfit(products = []) {
  return products.reduce((sum, product) => {
    const price = Number(product.price || 0);
    const cost = Number(product.cost || 0);
    const sold = Number(product.sold || 0);

    return sum + (price - cost) * sold;
  }, 0);
}