import assert from "assert";

function mostNumbers(...args: number[]): number {
  const len: number = args.length;
  const num: number = 10 ** 6;
  if (len < 2) {
    return 0;
  }
  args.sort((a, b) => a - b);
  return Math.round((args[len-1]-args[0])*num) / num;
}

assert.equal(mostNumbers(1, 2, 3), 2);
assert.equal(mostNumbers(5, -5), 10);
assert.equal(mostNumbers(10.2, -2.2, 0, 1.1, 0.5), 12.4);
assert.equal(mostNumbers(), 0);