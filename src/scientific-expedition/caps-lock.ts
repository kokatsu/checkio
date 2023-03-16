import assert from "assert";

function capsLock(text: string): string {
  let lock: boolean = false;
  let ret: string = "";
  for (const d of text) {
    if (d === 'a') {
      lock = !lock;
    }
    else {
      if (lock) {
        ret += d.toUpperCase();
      }
      else {
        ret += d;
      }
    }
  }
  return ret;
}

assert.equal(
  capsLock("Why are you asking me that?"),
  "Why RE YOU sking me thT?"
);
assert.equal(
  capsLock("Always wanted to visit Zambia."),
  "AlwYS Wnted to visit ZMBI."
);
assert.equal(capsLock("Aloha from Hawaii"), "Aloh FROM HwII");