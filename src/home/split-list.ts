import assert from "assert";

function splitList(values: number[]):number[][] {
  const len: number = values.length;
  const half: number = Math.floor((len+1)/2);
  const ret: number[][] = [[], []];
  values.forEach((value, i) => {
    if (i < half) {
      ret[0].push(value);
    }
    else {
      ret[1].push(value);
    }
  });
  return ret;
}

assert.deepEqual(splitList([1, 2, 3, 4, 5, 6]), [[1, 2, 3], [4, 5, 6]]);
assert.deepEqual(splitList([1, 2, 3]), [[1, 2], [3]]);
assert.deepEqual(splitList([1, 2, 3, 4, 5]), [[1, 2, 3], [4, 5]]);
assert.deepEqual(splitList([1]), [[1], []]);
assert.deepEqual(splitList([]), [[], []]);