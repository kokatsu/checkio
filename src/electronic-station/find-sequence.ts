import assert from "assert";

function findSequence(values: number[][]): boolean {
  const len: number = values.length;
  const dirs: number[][] = [[0, 1], [1, 1], [1, 0], [-1, 1]];
  let ret: boolean = false;
  for (let i = 0; i < len; ++i) {
    for (let j = 0; j < len; ++j) {
      dirs.forEach(dir => {
        let x: number = i;
        let y: number = j;
        let count: number = 1;
        while (0 <= x + dir[0] && x + dir[0] < len && y + dir[1] < len) {
          x += dir[0];
          y += dir[1];
          if (values[i][j] !== values[x][y]) {
            break;
          }
          count += 1;
          if (count >= 4) {
            ret = true;
          }
        }
      });
    }
  }
  return ret;
}

assert.equal(findSequence([[1, 2, 1, 1],
  [1, 1, 4, 1],
  [1, 3, 1, 6],
  [1, 7, 2, 5]]), true);
assert.equal(findSequence([[7, 1, 4, 1],
  [1, 2, 5, 2],
  [3, 4, 1, 3],
  [1, 1, 8, 1]]), false);
assert.equal(findSequence([[2, 1, 1, 6, 1],
  [1, 3, 2, 1, 1],
  [4, 1, 1, 3, 1],
  [5, 5, 5, 5, 5],
  [1, 1, 3, 1, 1]]), true);
assert.equal(findSequence([[7, 1, 1, 8, 1, 1],
  [1, 1, 7, 3, 1, 5],
  [2, 3, 1, 2, 5, 1],
  [1, 1, 1, 5, 1, 4],
  [4, 6, 5, 1, 3, 1],
  [1, 1, 9, 1, 2, 1]]), true);
assert.equal(findSequence([[2, 6, 2, 2, 7, 6, 5],
  [3, 4, 8, 7, 7, 3, 6],
  [6, 7, 3, 1, 2, 4, 1],
  [2, 5, 7, 6, 3, 2, 2],
  [3, 4, 3, 2, 7, 5, 6],
  [8, 4, 6, 5, 2, 9, 7],
  [5, 8, 3, 1, 3, 7, 8]]), false);
assert.equal(findSequence([[1, 7, 6, 1, 8, 5, 1],
  [7, 9, 1, 7, 2, 8, 6],
  [5, 1, 4, 5, 8, 8, 3],
  [8, 6, 3, 9, 7, 6, 9],
  [9, 8, 9, 8, 6, 8, 2],
  [1, 7, 2, 4, 9, 3, 8],
  [9, 9, 8, 6, 9, 2, 6]]), false);
assert.equal(findSequence([[6, 9, 1, 1, 6, 2],
  [5, 9, 7, 8, 2, 5],
  [2, 1, 1, 7, 9, 8],
  [1, 8, 1, 4, 7, 4],
  [7, 8, 5, 4, 5, 1],
  [6, 4, 8, 8, 1, 8]]), false);
assert.equal(findSequence([[2, 7, 6, 2, 1, 5, 2, 8, 4, 4],
  [8, 7, 5, 8, 9, 2, 8, 9, 5, 5],
  [5, 7, 7, 7, 4, 1, 1, 2, 6, 8],
  [4, 6, 6, 3, 2, 7, 6, 6, 5, 1],
  [2, 6, 6, 9, 8, 5, 5, 6, 7, 7],
  [9, 4, 1, 9, 1, 3, 7, 2, 3, 1],
  [5, 1, 4, 3, 6, 5, 9, 3, 4, 1],
  [6, 5, 5, 1, 7, 7, 8, 2, 1, 1],
  [9, 5, 7, 8, 2, 9, 2, 6, 9, 3],
  [8, 2, 5, 7, 3, 7, 3, 8, 6, 2]]), false);
assert.equal(findSequence([[1, 9, 7, 8, 9, 3, 6, 5, 6, 2],
  [4, 9, 4, 8, 3, 4, 8, 8, 5, 9],
  [2, 8, 5, 5, 7, 8, 6, 1, 3, 6],
  [6, 4, 7, 6, 9, 1, 4, 5, 7, 8],
  [4, 7, 7, 9, 8, 8, 8, 8, 4, 4],
  [3, 7, 3, 2, 1, 9, 1, 8, 9, 1],
  [4, 7, 2, 4, 8, 1, 2, 3, 6, 2],
  [4, 4, 1, 3, 3, 3, 9, 2, 6, 7],
  [8, 6, 1, 9, 3, 5, 8, 1, 7, 5],
  [7, 3, 6, 5, 3, 6, 6, 4, 8, 2]]), true);
assert.equal(findSequence([[1, 6, 1, 7],
  [4, 7, 3, 6],
  [3, 5, 7, 9],
  [8, 6, 6, 9]]), false);
assert.equal(findSequence([[1, 2, 4, 6, 3],
  [2, 5, 2, 6, 3],
  [8, 7, 5, 9, 5],
  [2, 1, 1, 4, 3],
  [4, 2, 7, 5, 1]]), false);
assert.equal(findSequence([[2, 3, 6, 5, 6, 2, 8, 3, 7, 4],
  [6, 9, 5, 9, 7, 6, 8, 5, 1, 6],
  [6, 8, 2, 6, 1, 9, 3, 6, 6, 4],
  [5, 8, 3, 2, 3, 8, 7, 4, 6, 4],
  [2, 3, 1, 4, 5, 1, 2, 5, 6, 9],
  [5, 4, 8, 7, 5, 5, 8, 4, 9, 5],
  [9, 7, 9, 9, 5, 9, 9, 8, 1, 2],
  [5, 1, 7, 4, 8, 3, 4, 1, 8, 8],
  [5, 3, 3, 2, 6, 1, 4, 3, 8, 8],
  [4, 8, 1, 4, 5, 8, 8, 7, 4, 7]]), true);
assert.equal(findSequence([[7, 7, 4, 4, 8],
  [7, 4, 5, 5, 6],
  [6, 6, 5, 2, 8],
  [6, 2, 3, 8, 4],
  [6, 1, 3, 1, 2]]), false);
assert.equal(findSequence([[7, 9, 1, 7, 6, 7, 5, 9, 6],
  [5, 5, 9, 3, 1, 6, 7, 4, 7],
  [1, 7, 5, 2, 3, 1, 6, 4, 7],
  [2, 2, 2, 8, 7, 2, 6, 6, 9],
  [5, 6, 4, 2, 6, 7, 3, 4, 7],
  [5, 5, 6, 4, 9, 4, 3, 1, 7],
  [7, 3, 2, 3, 2, 4, 4, 7, 3],
  [3, 6, 9, 7, 2, 5, 6, 2, 5],
  [4, 1, 3, 9, 4, 2, 4, 8, 4]]), true);