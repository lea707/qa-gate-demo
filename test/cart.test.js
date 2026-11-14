const test = require("node:test");
const assert = require("node:assert");
const { cartTotal } = require("../src/cart");

test("sums price times quantity", () => {
  assert.strictEqual(cartTotal([{ price: 10, qty: 2 }, { price: 5, qty: 1 }]), 25);
});

test("empty cart is 0", () => {
  assert.strictEqual(cartTotal([]), 0);
});
