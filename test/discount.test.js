const test = require("node:test");
const assert = require("node:assert");
const { applyDiscount } = require("../src/discount");

test("SAVE10 takes 10% off", () => assert.strictEqual(applyDiscount(50, "SAVE10"), 45));
test("unknown code changes nothing", () => assert.strictEqual(applyDiscount(50, "NOPE"), 50));
test("empty code changes nothing", () => assert.strictEqual(applyDiscount(50, ""), 50));
test("rounds to 2 decimals", () => assert.strictEqual(applyDiscount(19.99, "SAVE10"), 17.99));
