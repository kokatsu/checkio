import assert from "assert";

function sumByTypes(values: Array<number|string>): [string, number] {
  let ret: [string, number] = ['', 0];
  values.forEach(value => {
    if (typeof value === "string") {
      ret[0] += value;
    }
    else {
      ret[1] += value;
    }
  });
  return ret;
}

assert.deepEqual(sumByTypes([]), ['', 0]);
assert.deepEqual(sumByTypes([1, 2, 3]), ['', 6]);
assert.deepEqual(sumByTypes(['1', 2, 3]), ['1', 5]);
assert.deepEqual(sumByTypes(['1', '2', 3]), ['12', 3]);
assert.deepEqual(sumByTypes(['1', '2', '3']), ['123', 0]);
assert.deepEqual(sumByTypes(['size', 12, 'in', 45, 0]), ['sizein', 57]);