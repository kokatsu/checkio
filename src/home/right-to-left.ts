import assert from "assert";

function leftJoin(phrases: string[]): string {
  let ret: string = "";
  phrases.forEach((phrase, i) => {
    if (i > 0) {
      ret += ",";
    }
    ret += phrase.replace(/right/g, "left");
  });
  return ret;
}

assert.strictEqual(
  leftJoin(["left", "right", "left", "stop"]),
  "left,left,left,stop"
);
assert.strictEqual(leftJoin(["bright aright", "ok"]), "bleft aleft,ok");
assert.strictEqual(leftJoin(["brightness wright"]), "bleftness wleft");
assert.strictEqual(leftJoin(["enough", "jokes"]), "enough,jokes");