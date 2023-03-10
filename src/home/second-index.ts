import assert from "assert";

function secondIndex(text: string, symbol: string): number | undefined {
  const len: number = text.length;
  const f: number = text.indexOf(symbol);
  if (f >= 0) {
    for (let i = f + 1; i < len; ++i) {
      if (text[i] === symbol) {
        return i;
      }
    }
  }
  return undefined;
}

assert.equal(secondIndex("sims", "s"), 3);
assert.equal(secondIndex("find the river", "e"), 12);
assert.equal(secondIndex("hi", " "), undefined);
assert.equal(secondIndex("hi mayor", " "), undefined);
assert.equal(secondIndex("hi mr Mayor", " "), 5);