import assert from "assert";

function indexPower(ar: number[], n: number): number {
  if (n < ar.length) return Math.pow(ar[n], n);
  return -1;
}

assert.strictEqual(indexPower([1, 2, 3, 4], 2), 9);
assert.strictEqual(indexPower([1, 3, 10, 100], 3), 1000000);
assert.strictEqual(indexPower([0, 1], 0), 1);
assert.strictEqual(indexPower([1, 2], 3), -1);