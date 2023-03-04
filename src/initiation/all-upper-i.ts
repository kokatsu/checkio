import assert from "assert";

function isAllUpper(text: string): boolean {
  return text === text.toUpperCase();
}

assert.strictEqual(isAllUpper("ALL UPPER"), true);
assert.strictEqual(isAllUpper("all lower"), false);
assert.strictEqual(isAllUpper("mixed UPPER and lower"), false);
assert.strictEqual(isAllUpper(""), true);
assert.strictEqual(isAllUpper("444"), true);
assert.strictEqual(isAllUpper("55 55 5 "), true);