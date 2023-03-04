import assert from "assert";

function endZeros(a: number): number {
  if (a % 10 === 0) {
    return (a >= 10 ? endZeros(a/10) : 0) + 1;
  }
  return 0;
}

assert.strictEqual(endZeros(0), 1);
assert.strictEqual(endZeros(1), 0);
assert.strictEqual(endZeros(10), 1);
assert.strictEqual(endZeros(101), 0);
assert.strictEqual(endZeros(245), 0);
assert.strictEqual(endZeros(100100), 2);