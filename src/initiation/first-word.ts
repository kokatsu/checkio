import assert from "assert";

function firstWord(text: string): string {
  const words: string[] = text.split(/[\s|.|,]/);
  const regex: RegExp = /^\w/;
  for (const word of words) {
    if (regex.test(word)) {
      return word;
    }
  }
  return "";
}

assert.strictEqual(firstWord("Hello world"), "Hello");
assert.strictEqual(firstWord(" a word "), "a");
assert.strictEqual(firstWord("don't touch it"), "don't");
assert.strictEqual(firstWord("greetings, friends"), "greetings");
assert.strictEqual(firstWord("... and so on ..."), "and");
assert.strictEqual(firstWord("hi"), "hi");