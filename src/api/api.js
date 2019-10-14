import orders from '../__mocks/orders.json'

// Simulate an API load
export const fetchOrders = new Promise((resolve) => {
    setTimeout(() => {
        resolve(orders);
    }, 2500);
});
