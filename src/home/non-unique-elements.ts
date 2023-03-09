import assert from "assert";

function nonUniqueElements(data: number[]): number[] {
  let dict: {[key: number]: number} = {};
  data.forEach(datum => {
    if (datum in dict) {
      dict[datum] += 1;
    }
    else {
      dict[datum] = 0;
    }
  });
  const ret: number[] = [];
  data.forEach(datum => {
    if (dict[datum] > 0) {
      ret.push(datum);
    }
  })
  return ret;
}

assert.deepStrictEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3]);
assert.deepStrictEqual(nonUniqueElements([1, 2, 3, 4, 5]), []);
assert.deepStrictEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5]);
assert.deepStrictEqual(
  nonUniqueElements([10, 9, 10, 10, 9, 8]),
  [10, 9, 10, 10, 9]
);
assert.deepStrictEqual(nonUniqueElements([2, 2, 3, 2, 2]), [2, 2, 2, 2]);
assert.deepStrictEqual(nonUniqueElements([10, 20, 30, 10]), [10, 10]);
assert.deepStrictEqual(nonUniqueElements([7]), []);
assert.deepStrictEqual(
  nonUniqueElements([0, 1, 2, 3, 4, 0, 1, 2, 4]),
  [0, 1, 2, 4, 0, 1, 2, 4]
);
assert.deepStrictEqual(nonUniqueElements([99, 98, 99]), [99, 99]);
assert.deepStrictEqual(
  nonUniqueElements([0, 0, 0, 1, 1, 100]),
  [0, 0, 0, 1, 1]
);
assert.deepStrictEqual(
  nonUniqueElements([0, 0, 0, -1, -1, 100]),
  [0, 0, 0, -1, -1]
);