import assert from "assert";

function beginningZeros(a: string): number {
  if (a.length > 0) {
    return (a[0] === '0' ? beginningZeros(a.slice(1)) + 1 : 0);
  }
  return 0;
}

assert.strictEqual(beginningZeros("100"), 0);
assert.strictEqual(beginningZeros("001"), 2);
assert.strictEqual(beginningZeros("100100"), 0);
assert.strictEqual(beginningZeros("001001"), 2);
assert.strictEqual(beginningZeros("012345679"), 1);
assert.strictEqual(beginningZeros("0000"), 4);