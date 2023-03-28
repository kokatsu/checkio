import assert from "assert";

function findQuotes(text: string): string[] {
  const ret: string[] = [];
  let isPush: boolean = false;
  let str: string = "";
  for (const c of text) {
    if (c === '"') {
      if (isPush) {
        ret.push(str);
        str = "";
      }
      isPush = !isPush;
    }
    else if (isPush) {
      str += c;
    }
  }
  return ret;
}

assert.deepEqual(findQuotes('"Greetings"'), ['Greetings']);
assert.deepEqual(findQuotes('Hi'), []);
assert.deepEqual(findQuotes('good morning mister "superman"'), ['superman']);
assert.deepEqual(findQuotes('"this" doesn\'t make any "sense"'), ['this', 'sense']);
assert.deepEqual(findQuotes('"Lorem Ipsum" is simply dummy text ' +
  'of the printing and typesetting ' +
  'industry. Lorem Ipsum has been the ' +
  '"industry\'s standard dummy text ' +
  'ever since the 1500s", when an ' +
  'unknown printer took a galley of ' +
  'type and scrambled it to make a type ' +
  'specimen book. It has survived not ' +
  'only five centuries, but also the ' +
  'leap into electronic typesetting, ' +
  'remaining essentially unchanged. "It ' +
  'was popularised in the 1960s" with ' +
  'the release of Letraset sheets ' +
  'containing Lorem Ipsum passages, and ' +
  'more recently with desktop ' +
  'publishing software like Aldus ' +
  'PageMaker including versions of ' +
  'Lorem Ipsum.'), ['Lorem Ipsum',
  "industry's standard dummy text ever " +
  'since the 1500s',
  'It was popularised in the 1960s']);
assert.deepEqual(findQuotes('count empty quotes ""'), ['']);