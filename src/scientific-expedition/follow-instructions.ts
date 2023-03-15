import assert from "assert";

function follow(instructions: string): [number, number] {
  let ret: [number, number] = [0, 0];
  for (const d of instructions) {
    if (d === 'r') ret[0] += 1;
    if (d === 'l') ret[0] -= 1;
    if (d === 'f') ret[1] += 1;
    if (d === 'b') ret[1] -= 1;
  }
  return ret;
}

assert.deepStrictEqual(follow("fflff"), [-1, 4]);
assert.deepStrictEqual(follow("ffrff"), [1, 4]);
assert.deepStrictEqual(follow("fblr"), [0, 0]);