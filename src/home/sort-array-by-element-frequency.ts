import assert from "assert";


function frequencySort<T extends number | string>(items: T[]): T[] {
  const len: number = items.length;
  let map: Map<T, number> = new Map<T, number>();
  items.forEach(item => {
    const value: number | undefined = map.get(item);
    if (value === undefined) {
      map.set(item, 1);
    }
    else {
      map.set(item, value+1);
    }
  });
  let sorted: [T, number][] = [...map].sort((a, b) => b[1] - a[1]);
  const ret: T[] = [];
  sorted.forEach(value => {
    for (let i = 0; i < value[1]; ++i) {
      ret.push(value[0]);
    }
  });
  return ret;
}

assert.deepStrictEqual(
  frequencySort([4, 6, 2, 2, 6, 4, 4, 4]),
  [4, 4, 4, 4, 6, 6, 2, 2]
);
assert.deepStrictEqual(
  frequencySort([4, 6, 2, 2, 2, 6, 4, 4, 4]),
  [4, 4, 4, 4, 2, 2, 2, 6, 6]
);
assert.deepStrictEqual(frequencySort(["bob", "bob", "carl", "alex", "bob"]), [
  "bob",
  "bob",
  "bob",
  "carl",
  "alex",
]);
assert.deepStrictEqual(frequencySort([17, 99, 42]), [17, 99, 42]);
assert.deepStrictEqual(frequencySort([]), []);
assert.deepStrictEqual(frequencySort([1]), [1]);