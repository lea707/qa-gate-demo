const test = require("node:test");
const assert = require("node:assert");
const { isValidEmail } = require("../src/users");

test("accepts a normal address", () => assert.ok(isValidEmail("a@b.com")));
test("rejects a missing domain", () => assert.ok(!isValidEmail("a@")));
