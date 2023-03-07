import assert from "assert";

function countDigits(text: string): number {
  const regex: RegExp = /\d/;
  let ret: number = 0;
  for (const d of text) {
    if (regex.test(d)) {
      ret += 1;
    }
  }
  return ret;
}

assert.equal(countDigits('hi'), 0);
assert.equal(countDigits('who is 1st here'), 1);
assert.equal(countDigits('my numbers is 2'), 1);
assert.equal(countDigits('This picture is an oil on canvas '
  + 'painting by Danish artist Anna '
  + 'Petersen between 1845 and 1910 year'), 8);
assert.equal(countDigits('5 plus 6 is'), 2);
assert.equal(countDigits(''), 0);