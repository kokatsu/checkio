import assert from "assert";

function absoluteSorting(values: number[]): number[] {
  let ret: number[] = values.sort((a, b) => a * a - b * b);
  return ret;
}

assert.deepStrictEqual(absoluteSorting([-20, -5, 10, 15]), [-5, 10, 15, -20]);
assert.deepStrictEqual(absoluteSorting([1, 2, 3, 0]), [0, 1, 2, 3]);
assert.deepStrictEqual(absoluteSorting([-1, -2, -3, 0]), [0, -1, -2, -3]);