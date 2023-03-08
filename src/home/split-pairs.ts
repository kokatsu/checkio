import assert from "assert";

function splitPairs(text: string): string[] {
  const len: number = text.length;
  if (len % 2 == 1) text += "_";
  const size: number = Math.floor((len + 1) / 2);
  let ret: string[] = new Array<string>(size);
  for (let i = 0; i < size; ++i) {
    ret[i] = text.slice(i*2, (i+1)*2);
  }
  return ret;
}

assert.deepStrictEqual(splitPairs("abcd"), ["ab", "cd"]);
assert.deepStrictEqual(splitPairs("abc"), ["ab", "c_"]);
assert.deepStrictEqual(splitPairs("abcdf"), ["ab", "cd", "f_"]);
assert.deepStrictEqual(splitPairs("a"), ["a_"]);
assert.deepStrictEqual(splitPairs(""), []);