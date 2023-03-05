import assert from "assert";

function nonEmptyLines(text: string): number {
  const lines: string[] = text.split(/\n/);
  const regex: RegExp = /\w/;
  let ret: number = 0;
  lines.forEach(line => {
    if (regex.test(line)) {
      ret += 1;
    }
  });
  return ret;
}

assert.strictEqual(nonEmptyLines("one simple line\n"), 1);
assert.strictEqual(nonEmptyLines(""), 0);
assert.strictEqual(nonEmptyLines("\nonly one line\n            "), 1);
assert.strictEqual(
  nonEmptyLines(
    "\nLorem ipsum dolor sit amet,\n\nconsectetur adipiscing elit\nNam odio nisi, aliquam\n            "
  ),
  3
);