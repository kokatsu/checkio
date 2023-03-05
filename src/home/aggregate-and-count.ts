import assert from "assert";

function aggregateAndCount(items: [string, number][]): object {
  let ret: {[key: string]: number} = {};
  items.forEach(item => {
    if (item[0] in ret) {
      ret[item[0]] += item[1];
    }
    else {
      ret[item[0]] = item[1];
    }
  });
  return ret;
}

assert.deepEqual(
  aggregateAndCount([
    ["a", 1],
    ["b", 2],
  ]),
  { a: 1, b: 2 }
);
assert.deepEqual(
  aggregateAndCount([
    ["a", 1],
    ["a", 2],
  ]),
  { a: 3 }
);
assert.deepEqual(
  aggregateAndCount([
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["a", 5],
  ]),
  { a: 6, b: 2, c: 3 }
);
assert.deepEqual(aggregateAndCount([["a", 1]]), { a: 1 });