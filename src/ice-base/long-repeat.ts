import assert from "assert";

function longRepeat(line: string): number {
  let ret: number = 0;
  let num: number = 0;
  let prev: string = "";
  for (const c of line) {
    if (c == prev) {
      num += 1;
    }
    else {
      num = 1;
      prev = c;
    }
    if (ret < num) {
      ret = num;
    }
  }
  return ret;
}

assert.strictEqual(longRepeat("sdsffffse"), 4);
assert.strictEqual(longRepeat("ddvvrwwwrggg"), 3);