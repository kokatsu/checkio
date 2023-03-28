import assert from "assert";

function romanNumerals(data: number): string {
  const roman: Map<string, number> = new Map([
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ]);
  let ret: string = '';
  roman.forEach((value, key) => {
    while (data >= value) {
      data -= value;
      ret += key;
    }
  });
  return ret;
}

assert.equal(romanNumerals(1), 'I');
assert.equal(romanNumerals(10), 'X');
assert.equal(romanNumerals(50), 'L');
assert.equal(romanNumerals(100), 'C');
assert.equal(romanNumerals(500), 'D');
assert.equal(romanNumerals(1000), 'M');
assert.equal(romanNumerals(3999), 'MMMCMXCIX');
assert.equal(romanNumerals(99), 'XCIX');
assert.equal(romanNumerals(88), 'LXXXVIII');
assert.equal(romanNumerals(587), 'DLXXXVII');
assert.equal(romanNumerals(2387), 'MMCCCLXXXVII');
assert.equal(romanNumerals(3888), 'MMMDCCCLXXXVIII');
assert.equal(romanNumerals(76), 'LXXVI');
assert.equal(romanNumerals(6), 'VI');
assert.equal(romanNumerals(13), 'XIII');
assert.equal(romanNumerals(44), 'XLIV');