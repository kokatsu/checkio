import assert from "assert";

function maxDigit(value: number): number {
  const arr: string[] = value.toString().split('');
  return arr.map(x => parseInt(x, 10)).reduce((x, y) => Math.max(x, y));
}

assert.strictEqual(maxDigit(0), 0);
assert.strictEqual(maxDigit(52), 5);
assert.strictEqual(maxDigit(634), 6);
assert.strictEqual(maxDigit(1), 1);
assert.strictEqual(maxDigit(10000), 1);