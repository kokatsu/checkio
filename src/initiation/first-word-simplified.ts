import assert from "assert";

function firstWord(text: string): string {
  const words: string[] = text.split(' ');
  return words[0];
}

assert.strictEqual(firstWord("Hello world"), "Hello");
assert.strictEqual(firstWord("a word"), "a");
assert.strictEqual(firstWord("greeting from CheckiO Planet"), "greeting");
assert.strictEqual(firstWord("hi"), "hi");