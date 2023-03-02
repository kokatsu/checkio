import assert from "assert";

const lower: number = 6;

function isAcceptablePassword(password: string): boolean {
  return password.length > lower;
}

assert.strictEqual(isAcceptablePassword("short"), false);
assert.strictEqual(isAcceptablePassword("muchlonger"), true);
assert.strictEqual(isAcceptablePassword("ashort"), false);