import assert from "assert";

function missingNumber(items: number[]): number {
  let arr: number[] = items.sort((a, b) => a - b);
  const len: number = items.length;
  let pos: number = -1;
  let num: number = -1;
  let diff: number = arr[len-1] + 1;
  for (let i = 0; i < len - 1; ++i) {
    const d: number = arr[i+1] - arr[i];
    if (num < d) {
      pos = i;
      num = d;
    }
    if (diff > d) {
      diff = d;
    }
  }
  return arr[pos] + diff;
}

assert.strictEqual(missingNumber([1, 4, 2, 5]), 3);
assert.strictEqual(missingNumber([2, 6, 8]), 4);