import assert from "assert";

function replaceFirst(values: number[]): number[] {
  const len: number = values.length;
  if (len < 2) {
    return values;
  }
  const ret: number[] = values.slice(1);
  ret.push(values[0])
  return ret;
}

assert.deepStrictEqual(replaceFirst([1, 2, 3, 4]), [2, 3, 4, 1]);
assert.deepStrictEqual(replaceFirst([1]), [1]);
assert.deepStrictEqual(replaceFirst([]), []);