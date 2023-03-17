import assert from "assert";

function toCamelCase(name: string): string {
  const s: string[] = name.split("_");
  const arr: string[] = [];
  s.forEach(str => {
    let t: string = "";
    const len = str.length;
    for (let i = 0; i < len; ++i) {
      if (i === 0) {
        t += str[i].toUpperCase();
      }
      else {
        t += str[i];
      }
    }
    arr.push(t);
  });
  const ret: string = arr.join("");
  return ret;
}

assert.strictEqual(toCamelCase("my_function_name"), "MyFunctionName");
assert.strictEqual(toCamelCase("i_phone"), "IPhone");