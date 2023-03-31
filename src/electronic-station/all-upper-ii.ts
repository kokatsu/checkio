import assert from "assert";

function isAllUpper(text: string): boolean {
  return (text.match(/[A-Z]/g) || []).length > 0 && text === text.toUpperCase();
}

assert.strictEqual(isAllUpper("ALL UPPER"), true);
assert.strictEqual(isAllUpper("all lower"), false);
assert.strictEqual(isAllUpper("mixed UPPER and lower"), false);
assert.strictEqual(isAllUpper(""), false);