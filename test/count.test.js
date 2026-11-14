const test = require("node:test");
const assert = require("node:assert");
const { cartCount } = require("../src/count");

test("counts quantities", () => assert.strictEqual(cartCount([{ qty: 2 }, { qty: 3 }]), 5));
test("empty cart is 0", () => assert.strictEqual(cartCount([]), 0));
