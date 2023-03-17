import assert from "assert";

function mostWanted(text: string): string {
  let map: Map<string, number> = new Map();
  const regex: RegExp = /[a-zA-Z]/;
  for (const c of text) {
    if (!regex.test(c)) {
      continue;
    }
    const l: string = c.toLowerCase();
    const n: number | undefined = map.get(l);
    if (n === undefined) {
      map.set(l, 1);
    }
    else {
      map.set(l, n+1);
    }
  }
  let sorted: [string, number][] = [...map].sort((a, b) =>
    a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]
  );
  return sorted[0][0];
}

assert.strictEqual(mostWanted("Hello World!"), "l");
assert.strictEqual(mostWanted("How do you do?"), "o");
assert.strictEqual(mostWanted("One"), "e");
assert.strictEqual(mostWanted("Oops!"), "o");
assert.strictEqual(mostWanted("AAaooo!!!!"), "a");
assert.strictEqual(mostWanted("abe"), "a");