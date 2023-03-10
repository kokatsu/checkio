import assert from "assert";

function allTheSame(elements: any[]): boolean {
  const map: Map<any, boolean> = new Map();
  elements.forEach(elem => {
    if (!map.has(elem)) {
      map.set(elem, true);
    }
  });
  return map.size < 2;
}

assert.strictEqual(allTheSame([1, 1, 1]), true);
assert.strictEqual(allTheSame([1, 2, 1]), false);
assert.strictEqual(allTheSame([1, "a", 1]), false);
assert.strictEqual(allTheSame([1, 1, 1, 2]), false);
assert.strictEqual(allTheSame([]), true);
assert.strictEqual(allTheSame([1]), true);