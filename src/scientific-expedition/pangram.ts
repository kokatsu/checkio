import assert from "assert";

function checkPangram(text: string): boolean {
  const map: Map<string, boolean> = new Map();
  const regex: RegExp = /[a-zA-Z]/;
  for (const c of text) {
    if (!regex.test(c) || map.get(c.toLowerCase())) {
      continue;
    }
    map.set(c.toLowerCase(), true);
  }
  return map.size === 26;
}

assert.equal(checkPangram(('The quick brown fox jumps over the '
  + 'lazy dog.')), true);
assert.equal(checkPangram('ABCDEF'), false);
assert.equal(checkPangram('abcdefghijklmnopqrstuvwxyz'), true);
assert.equal(checkPangram('ABCDEFGHIJKLMNOPQRSTUVWXYZ'), true);
assert.equal(checkPangram('abcdefghijklmnopqrstuvwxy'), false);
assert.equal(checkPangram(('Bored? Craving a pub quiz fix? Why, '
  + 'just come to the Royal Oak!')), true);
assert.equal(checkPangram(("As quirky joke, chefs won't pay "
  + 'devil magic zebra tax.')), true);
assert.equal(checkPangram(('Six big devils from Japan quickly '
  + 'forgot how to walt.')), false);