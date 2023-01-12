function solution(n) {
  const one = n.toString(2).match(/1/g).length;
  let count = 0;

  while (one !== count) {
    n++;
    count = n.toString(2).match(/1/g).length;
  }

  return n;
}

console.log(solution(78));
