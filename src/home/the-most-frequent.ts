import assert from "assert";

function mostFrequent(data: string[]): string {
  let dict: {[key: string]: number} = {};
  data.forEach(d => {
    if (d in dict) {
      dict[d] += 1;
    }
    else {
      dict[d] = 1;
    }
  });
  let cnt: number = 0;
  let ret: string = "";
  for (const key in dict) {
    if (cnt < dict[key]) {
      cnt = dict[key];
      ret = key;
    }
  };
  return ret;
}

assert.strictEqual(mostFrequent(["a", "b", "c", "a", "b", "a"]), "a");
assert.strictEqual(mostFrequent(["a", "a", "bi", "bi", "bi"]), "bi");