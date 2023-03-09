function popularWords(text: string, words: string[]): {[key: string]: number} {
  let ret: {[key: string]: number} = {};
  const arr: string[] = text.split(/\s/).map(x => x.toUpperCase());
  words.forEach(word => {
    let c: number = (arr.filter(x => x === word.toUpperCase()) || []).length;
    ret[word] = c;
  });
  return ret;
}