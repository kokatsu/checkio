import assert from "assert";

function translate(text: string): string {
  const letters: string = 'aeiouy';
  const words: string[] = text.split(' ');
  const arr: string[] = [];
  words.forEach(word => {
    const len = word.length;
    let str: string = '';
    let idx: number = 0;
    while (idx < len) {
      str += word[idx];
      const pos = letters.indexOf(word[idx]);
      if (pos >= 0) {
        idx += 3;
      }
      else {
        idx += 2;
      }
    }
    arr.push(str);
  });
  const ret: string = arr.join(' ');
  return ret;
}

assert.equal(translate('hieeelalaooo'), 'hello');
assert.equal(translate('hoooowe yyyooouuu duoooiiine'), 'how you doin');
assert.equal(translate('aaa bo cy da eee fe'), 'a b c d e f');
assert.equal(translate('sooooso aaaaaaaaa'), 'sos aaa');