import assert from "assert";

function fromCamelCase(name: string): string {
  const words: string[] = name.replace(/([A-Z])/g, " $1").split(" ");
  const arr: string[] = [];
  words.forEach(word => {
    if (word !== "") {
      arr.push(word.toLowerCase());
    }
  });
  const ret: string = arr.join("_");
  return ret;
}

assert.strictEqual(fromCamelCase("MyFunctionName"), "my_function_name");
assert.strictEqual(fromCamelCase("IPhone"), "i_phone");