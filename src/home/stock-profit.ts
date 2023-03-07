import assert from "assert";

function stockProfit(stock: number[]): number {
  const len: number = stock.length;
  let ret: number = 0;
  stock.forEach((s, i) => {
    for (let j = i + 1; j < len; ++j) {
      if (ret < stock[j] - s) {
        ret = stock[j] - s;
      }
    }
  });
  return ret;
}

assert.strictEqual(stockProfit([2, 3, 4, 5]), 3);
assert.strictEqual(stockProfit([3, 1, 3, 4, 5, 1]), 4);
assert.strictEqual(stockProfit([4, 3, 2, 1]), 0);
assert.strictEqual(stockProfit([6, 2, 1, 2, 3, 2, 3, 4, 5, 4]), 4);
assert.strictEqual(stockProfit([1, 1, 1, 2, 1, 1, 1]), 1);
assert.strictEqual(stockProfit([4, 3, 2, 1, 2, 1, 2, 1]), 1);
assert.strictEqual(stockProfit([1, 1, 1, 1]), 0);