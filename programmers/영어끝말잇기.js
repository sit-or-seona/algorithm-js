function solution(n, words) {
  let arr = [];
  let last = words[0][0];
    
  for (let i in words) {
    if (words[i][0] === last && arr.indexOf(words[i]) === -1) {
      arr.push(words[i]);
      last = words[i][words[i].length - 1];
    } else return [+i%n +1, ~~(+i / n) +1];
  }

  return [0, 0];
}

console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
