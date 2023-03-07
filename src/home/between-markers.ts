import assert from "assert";

function betweenMarkers(text: string, begin: string, end: string): string {
  const f: number = text.indexOf(begin);
  const b: number = text.indexOf(end);
  if (f === - 1) {
    if (b === -1) {
      return text;
    }
    else {
      return text.slice(0, b);
    }
  }
  else if (b === -1) {
    return text.slice(f+begin.length);
  }
  return text.slice(f+begin.length, b);
}

assert.strictEqual(betweenMarkers("What is >apple<", ">", "<"), "apple");
assert.strictEqual(
  betweenMarkers(
    "<head><title>My new site</title></head>",
    "<title>",
    "</title>"
  ),
  "My new site"
);
assert.strictEqual(betweenMarkers("No[/b] hi", "[b]", "[/b]"), "No");
assert.strictEqual(betweenMarkers("No [b]hi", "[b]", "[/b]"), "hi");
assert.strictEqual(betweenMarkers("No hi", "[b]", "[/b]"), "No hi");
assert.strictEqual(betweenMarkers("No <hi>", ">", "<"), "");