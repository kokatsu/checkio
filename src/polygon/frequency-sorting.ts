import assert from "assert";

function frequencySorting(numbers: number[]): number[] {
  let map: Map<number, number> = new Map<number, number>();
  numbers.forEach(item => {
    const value: number | undefined = map.get(item);
    if (value === undefined) {
      map.set(item, 1);
    }
    else {
      map.set(item, value+1);
    }
  });
  let sorted: [number, number][] = [...map].sort((a, b) => a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]);
  const ret: number[] = [];
  sorted.forEach(value => {
    for (let i = 0; i < value[1]; ++i) {
      ret.push(value[0]);
    }
  });
  return ret;
}

assert.deepStrictEqual(frequencySorting([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(
  frequencySorting([3, 4, 11, 13, 11, 4, 4, 7, 3]),
  [4, 4, 4, 3, 3, 11, 11, 7, 13]
);