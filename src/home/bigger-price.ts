import assert from "assert";

interface Stock {
  name: string,
  price: number,
};

function biggerPrice(limit: number, data: Stock[]): Stock[] {
  let arr: Stock[] = data.sort((a, b) => b.price - a.price);
  return arr.slice(0, limit);
}

assert.deepEqual(biggerPrice(2, [
  {"name": "bread", "price": 100},
  {"name": "wine", "price": 138},
  {"name": "meat", "price": 15},
  {"name": "water", "price": 1}
]), [
  {"name": "wine", "price": 138},
  {"name": "bread", "price": 100}
]);
assert.deepEqual(biggerPrice(1, [
  {"name": "pen", "price": 5},
  {"name": "whiteboard", "price": 170}
]), [{"name": "whiteboard", "price": 170}]);