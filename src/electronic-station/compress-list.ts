import assert from "assert";

function compress(items: number[]): number[] {
  const ret: number[] = [];
  items.forEach(item => {
    if (ret.length === 0 || item !== ret[ret.length-1]) {
      ret.push(item);
    }
  });
  return ret;
}

assert.deepStrictEqual(compress([1, 1, 1, 1, 2, 2, 2, 1, 1, 1]), [1, 2, 1]);
assert.deepStrictEqual(compress([7, 7]), [7]);
assert.deepStrictEqual(compress([]), []);
assert.deepStrictEqual(compress([1, 2, 3, 4]), [1, 2, 3, 4]);
assert.deepStrictEqual(compress([9, 9, 9, 9, 9, 9, 9]), [9]);
assert.deepStrictEqual(
    compress([9, 9, 9, 9, 9, 9, 9, 0, 9, 9, 9, 9, 9, 9]),
    [9, 0, 9]
);