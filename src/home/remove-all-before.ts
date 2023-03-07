import assert from "assert";

function removeAllBefore(values: number[], b: number): number[] {
  const pos = values.findIndex(value => value === b);
  if (pos >= 0) {
    return values.slice(pos);
  }
  return values;
}

assert.deepStrictEqual(removeAllBefore([1, 2, 3, 4, 5], 3), [3, 4, 5]);
assert.deepStrictEqual(removeAllBefore([1, 1, 2, 2, 3, 3], 2), [2, 2, 3, 3]);
assert.deepStrictEqual(
  removeAllBefore([1, 1, 2, 4, 2, 3, 4], 2),
  [2, 4, 2, 3, 4]
);
assert.deepStrictEqual(removeAllBefore([1, 1, 5, 6, 7], 2), [1, 1, 5, 6, 7]);
assert.deepStrictEqual(removeAllBefore([], 0), []);
assert.deepStrictEqual(
  removeAllBefore([7, 7, 7, 7, 7, 7, 7, 7, 7], 7),
  [7, 7, 7, 7, 7, 7, 7, 7, 7]
);