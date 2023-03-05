import assert from "assert";

function removeMinMax(data: Set<number>, total: number): Set<number> {
  let arr: number[] = Array.from(data);
  arr = arr.sort((a, b) => a - b);
  let l: number = 0;
  let r: number = arr.length - 1;
  for (let i = 0; i < total; ++i) {
    if (l <= r) {
      data.delete(arr[l]);
      l += 1;
    }
    if (l <= r) {
      data.delete(arr[r]);
      r -= 1;
    }
  }
  return data;
}

assert.deepStrictEqual(
  removeMinMax(new Set([8, 9, 18, 7]), 1),
  new Set([8, 9])
);
assert.deepStrictEqual(removeMinMax(new Set([8, 9, 7]), 0), new Set([8, 9, 7]));
assert.deepStrictEqual(removeMinMax(new Set([8, 9, 7]), 2), new Set([]));
assert.deepStrictEqual(removeMinMax(new Set([1, 2, 7, 8, 9]), 2), new Set([7]));
assert.deepStrictEqual(removeMinMax(new Set([]), 1), new Set([]));