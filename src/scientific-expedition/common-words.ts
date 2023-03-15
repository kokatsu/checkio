import assert from "assert";

function commonWords(line1: string, line2: string): string {
  const words1: string[] = line1.split(',');
  const words2: string[] = line2.split(',');
  const map: Map<string, boolean> = new Map();
  words2.forEach(word => {
    map.set(word, true);
  });
  let list: string[] = [];
  words1.forEach(word => {
    if (map.get(word)) {
      list.push(word);
    }
  });
  let sorted: string[] = list.sort((a, b) => a.localeCompare(b));
  const ret: string = sorted.join(',');
  return ret;
}

assert.equal(commonWords('hello,world', 'hello,earth'), 'hello');
assert.equal(commonWords('one,two,three', 'four,five,six'), '');
assert.equal(commonWords('one,two,three',
  'four,five,one,two,six,three'), 'one,three,two');