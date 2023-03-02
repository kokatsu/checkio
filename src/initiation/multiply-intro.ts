import assert from "assert";

function multTwo(a: number, b: number): number {
  return a * b;
}

assert.equal(multTwo(3, 2), 6);
assert.equal(multTwo(0, 1), 0);