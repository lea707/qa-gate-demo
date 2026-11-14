const { cartTotal } = require("./cart");

// One-line summary shown above the pay button.
function checkoutSummary(items) {
  const count = items.reduce((n, item) => n + item.qty, 0);
  return `${count} item(s), total ${cartTotal(items)}`;
}

module.exports = { checkoutSummary };
