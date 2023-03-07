import assert from "assert";

function threeWords(text: string): boolean {
  const words: string[] = text.split(' ');
  const len: number = words.length;
  const regex: RegExp = /\d/;
  let ret: boolean = false;
  for (let i = 2; i < len; ++i) {
    if (!regex.test(words[i-2]) && !regex.test(words[i-1]) && !regex.test(words[i])) {
      ret = true;
    }
  }
  return ret;
}

assert.strictEqual(threeWords("Hello World hello"), true);
assert.strictEqual(threeWords("He is 123 man"), false);
assert.strictEqual(threeWords("1 2 3 4"), false);
assert.strictEqual(threeWords("bla bla bla bla"), true);
assert.strictEqual(threeWords("Hi"), false);