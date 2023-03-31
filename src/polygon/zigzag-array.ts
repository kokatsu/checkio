import assert from "assert";

function createZigzag(
  rows: number,
  cols: number,
  start: number = 1
): number[][] {
  const ret: number[][] = [];
  for (let i = 0; i < rows; ++i) {
    ret.push([]);
    for (let j = 0; j < cols; ++j) {
      if (i % 2 == 0) {
        ret[i].push(start);
      }
      else {
        ret[i].unshift(start);
      }
      start += 1;
    }
  }
  return ret;
}

assert.deepStrictEqual(createZigzag(3, 5), [
  [1, 2, 3, 4, 5],
  [10, 9, 8, 7, 6],
  [11, 12, 13, 14, 15],
]);
assert.deepStrictEqual(createZigzag(5, 1), [[1], [2], [3], [4], [5]]);
assert.deepStrictEqual(createZigzag(3, 3, 5), [
  [5, 6, 7],
  [10, 9, 8],
  [11, 12, 13],
]);