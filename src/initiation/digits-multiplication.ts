import assert from "assert";

function digitsMultip(data: number): number {
  let ret: number = 1;
  while (data > 0) {
    const rem: number = data % 10;
    if (rem > 0) {
      ret *= rem;
    }
    data = Math.floor(data/10);
  }
  return ret;
}

assert.strictEqual(digitsMultip(123405), 120);
assert.strictEqual(digitsMultip(999), 729);
assert.strictEqual(digitsMultip(1000), 1);
assert.strictEqual(digitsMultip(1111), 1);