import assert from "assert";

function sumNumbers(text: string): number {
  const words: string[] = text.split(' ');
  const regex: RegExp = /^\d+$/;
  let ret: number = 0;
  words.forEach(word => {
    if (regex.test(word)) {
      ret += parseInt(word, 10);
    }
  })
  return ret;
}

assert.strictEqual(sumNumbers("hi"), 0);
assert.strictEqual(sumNumbers("who is 1st here"), 0);
assert.strictEqual(sumNumbers("my numbers is 2"), 2);
assert.strictEqual(
    sumNumbers(
        "This picture is an oil on canvas painting by Danish artist Anna Petersen between 1845 and 1910 year"
    ),
    3755
);
assert.strictEqual(sumNumbers("5 plus 6 is"), 11);
assert.strictEqual(sumNumbers(""), 0);