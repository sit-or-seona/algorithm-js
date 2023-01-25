function solution(n, left, right) {
  const answer = [];

  for (let i = left; i <= right; i++) {
    const a = (i % n) + 1;
    const b = ~~(i / n) + 1;
    const value = a < b ? b : a;
    answer.push(value);
  }

  return answer;
}

console.log(solution(3, 2, 5));
