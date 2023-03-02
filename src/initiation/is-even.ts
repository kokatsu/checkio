import assert from "assert";

function isEven(num: number): boolean {
  return num % 2 === 0;
}

assert.strictEqual(isEven(2), true);
assert.strictEqual(isEven(5), false);
assert.strictEqual(isEven(0), true);