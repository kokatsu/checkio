import assert from "assert";

function numberLength(value: number): number {
  const str: string = value.toString();
  return str.length;
}

assert.strictEqual(numberLength(10), 2);
assert.strictEqual(numberLength(0), 1);
assert.strictEqual(numberLength(4), 1);
assert.strictEqual(numberLength(44), 2);