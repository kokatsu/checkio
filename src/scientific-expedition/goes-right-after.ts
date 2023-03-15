import assert from "assert";

function goesAfter(word: string, first: string, second: string): boolean {
  if (first === second) {
    return false;
  }
  const len: number = word.length;
  const pos1: number = word.indexOf(first);
  const pos2: number = word.indexOf(second)
  if (pos1 === -1 || pos1 + 1 === len) {
    return false;
  }
  return pos1 + 1 === pos2;
}

assert.strictEqual(goesAfter("world", "w", "o"), true);
assert.strictEqual(goesAfter("world", "w", "r"), false);
assert.strictEqual(goesAfter("world", "l", "o"), false);
assert.strictEqual(goesAfter("panorama", "a", "n"), true);
assert.strictEqual(goesAfter("list", "l", "o"), false);
assert.strictEqual(goesAfter("", "l", "o"), false);
assert.strictEqual(goesAfter("list", "l", "l"), false);
assert.strictEqual(goesAfter("world", "d", "w"), false);
assert.strictEqual(goesAfter("Almaz", "a", "l"), false);