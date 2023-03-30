import assert from "assert";

function columnNumber(name: string): number {
  const base: number = "A".charCodeAt(0) - 1;
  const size: number = 26;
  let coef: number = 1;
  let ret: number = 0;
  while (name.length > 0) {
    const c: string = name.slice(-1);
    ret += coef * (c.charCodeAt(0) - base);
    coef *= size;
    name = name.slice(0, -1);
  }
  return ret;
}

assert.strictEqual(columnNumber("A"), 1);
assert.strictEqual(columnNumber("Z"), 26);
assert.strictEqual(columnNumber("AB"), 28);
assert.strictEqual(columnNumber("ZY"), 701);