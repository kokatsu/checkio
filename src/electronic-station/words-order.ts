import assert from "assert";

function wordsOrder(text: string, words: string[]): boolean {
  const list: string[] = text.split(" ");
  const map: Map<string, boolean> = new Map();
  const len: number = words.length;
  let index: number = 0;
  const ret: string[] = [];
  list.forEach(str => {
    if (!map.get(str)) {
      map.set(str, true);
      if (index < len && str === words[index]) {
        ret.push(str);
        index += 1;
      }
    }
  })
  return JSON.stringify(ret) === JSON.stringify(words);
}

assert.strictEqual(wordsOrder("hi world im here", ["world", "here"]), true);
assert.strictEqual(wordsOrder("hi world im here", ["here", "world"]), false);
assert.strictEqual(wordsOrder("hi world im here", ["world"]), true);
assert.strictEqual(
  wordsOrder("hi world im here", ["world", "here", "hi"]),
  false
);
assert.strictEqual(
  wordsOrder("hi world im here", ["world", "im", "here"]),
  true
);
assert.strictEqual(
  wordsOrder("hi world im here", ["world", "hi", "here"]),
  false
);
assert.strictEqual(wordsOrder("hi world im here", ["world", "world"]), false);
assert.strictEqual(wordsOrder("hi world im here", ["country", "world"]), false);
assert.strictEqual(wordsOrder("hi world im here", ["wo", "rld"]), false);
assert.strictEqual(wordsOrder("", ["world", "here"]), false);
assert.strictEqual(
  wordsOrder("hi world world im here", ["world", "world"]),
  false
);
assert.strictEqual(
  wordsOrder("hi world world im here hi world world im here", [
    "world",
    "here",
  ]),
  true
);