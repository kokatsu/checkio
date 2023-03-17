import assert from "assert";

function findMessage(message: string): string {
  let ret: string = '';
  const regex: RegExp = /[A-Z]/;
  for (const c of message) {
    if (regex.test(c)) {
      ret += c;
    }
  }
  return ret;
}

assert.equal(findMessage(('How are you? Eh, ok. Low or Lower? '
  + 'Ohhh.')), 'HELLO');
assert.equal(findMessage('hello world!'), '');
assert.equal(findMessage('HELLO WORLD!!!'), 'HELLOWORLD');