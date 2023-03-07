import assert from "assert";

function backwardStringByWord(text: string): string {
  const words: string[] = text.split(" ");
  const list: string[] = [];
  words.forEach(word => {
    let char: string[] = word.split("");
    let rev: string[] = char.reverse();
    list.push(rev.join(""));
  });
  return list.join(" ");
}

assert.strictEqual(backwardStringByWord(""), "");
assert.strictEqual(backwardStringByWord("world"), "dlrow");
assert.strictEqual(backwardStringByWord("hello world"), "olleh dlrow");
assert.strictEqual(backwardStringByWord("hello   world"), "olleh   dlrow");
assert.strictEqual(
  backwardStringByWord("welcome to a game"),
  "emoclew ot a emag"
);