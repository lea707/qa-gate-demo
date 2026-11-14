const test = require("node:test");
const assert = require("node:assert");
const { checkPassword } = require("../src/password");

test("short password fails", () => assert.ok(checkPassword("a1").includes("too_short")));
test("password without a number fails", () => assert.ok(checkPassword("abcdefgh").includes("needs_number")));
test("long password with a number passes", () => assert.deepStrictEqual(checkPassword("abcdefg1"), []));
