import assert from "assert";

function evenLast(data: number[]): number {
  const len: number = data.length;
  let ret: number = 0;
  for (let i = 0; i < len; i += 2) {
    ret += data[i];
  }
  if (len > 0) {
    ret *= data[len-1];
  }
  return ret;
}

assert.strictEqual(evenLast([0, 1, 2, 3, 4, 5]), 30);
assert.strictEqual(evenLast([1, 3, 5]), 30);
assert.strictEqual(evenLast([6]), 36);
assert.strictEqual(evenLast([]), 0);