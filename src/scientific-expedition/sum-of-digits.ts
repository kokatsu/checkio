import assert from "assert";

function sumDigits(num: number): number {
  while (num >= 10) {
    let next: number = 0;
    while (num > 0) {
      const d: number = num % 10;
      next += d;
      num = Math.floor(num/10);
    }
    num = next;
  }
  return num;
}

assert.strictEqual(sumDigits(38), 2);
assert.strictEqual(sumDigits(0), 0);
assert.strictEqual(sumDigits(10), 1);
assert.strictEqual(sumDigits(132), 6);
assert.strictEqual(sumDigits(232), 7);
assert.strictEqual(sumDigits(811), 1);
assert.strictEqual(sumDigits(702), 9);