// Cart helpers for the demo shop.

/**
 * Total price of the cart.
 * @param {{price: number, qty: number}[]} items
 */
function cartTotal(items) {
  let total = 0;
  for (const item of items) {
    total += item.price * item.qty;
  }
  return total;
}

module.exports = { cartTotal };
