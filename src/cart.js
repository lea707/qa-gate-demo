// Cart helpers for the demo shop.
function cartTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}

module.exports = { cartTotal };
