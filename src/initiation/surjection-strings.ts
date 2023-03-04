import assert from "assert";

function isometricStrings(line1: string, line2: string): boolean {
  const len: number = line1.length;
  const trans: {[key: string]: string} = {};
  for (let i = 0; i < len; ++i) {
    if (line1[i] == line2[i]) continue;
    if (line1[i] in trans && trans[line1[i]] !== line2[i]) return false;
    trans[line1[i]] = line2[i];
  }
  return true;
}

assert.strictEqual(isometricStrings("add", "egg"), true);
assert.strictEqual(isometricStrings("foo", "bar"), false);
assert.strictEqual(isometricStrings("bar", "foo"), true);
assert.strictEqual(isometricStrings("", ""), true);
assert.strictEqual(isometricStrings("all", "all"), true);
assert.strictEqual(isometricStrings("gogopy", "doodle"), false);
assert.strictEqual(isometricStrings("abba", "cccc"), true);