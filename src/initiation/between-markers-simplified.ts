import assert from "assert";

function betweenMarkers(text: string, start: string, end: string): string {
  const l: number = text.indexOf(start) + 1;
  const r: number = text.indexOf(end);
  return text.slice(l, r);
}

assert.strictEqual(betweenMarkers("What is >apple<", ">", "<"), "apple");
assert.strictEqual(betweenMarkers("What is [apple]", "[", "]"), "apple");
assert.strictEqual(betweenMarkers("What is ><", ">", "<"), "");
assert.strictEqual(betweenMarkers("[an apple]", "[", "]"), "an apple");