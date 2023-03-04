import assert from "assert";

function correctSentence(text: string): string {
  return text.replace(text[0], text[0].toUpperCase()) + (text.slice(-1) === '.' ? '' : '.');
}

assert.strictEqual(
  correctSentence("greetings, friends"),
  "Greetings, friends."
);
assert.strictEqual(
  correctSentence("Greetings, friends"),
  "Greetings, friends."
);
assert.strictEqual(
  correctSentence("Greetings, friends."),
  "Greetings, friends."
);
assert.strictEqual(
  correctSentence("greetings, friends."),
  "Greetings, friends."
);