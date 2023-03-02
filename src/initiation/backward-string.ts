import assert from "assert";

function backwardString(value: string): string {
  const chars: string[] = value.split('');
  const rev: string[] = chars.reverse();
  const ret: string = rev.join("");
  return ret;
}

assert.strictEqual(backwardString("val"), "lav");
assert.strictEqual(backwardString(""), "");
assert.strictEqual(backwardString("ohho"), "ohho");
assert.strictEqual(backwardString("123456789"), "987654321");