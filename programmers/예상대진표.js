function solution(n, a, b) {
  let answer = 1;

  if (a > b) [a, b] = [b, a];
  if (b - a === 1 && a % 2 === 1) return answer;

  while (answer <= n) {
    answer++;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    if (b - a === 1 && a % 2 === 1) return answer;
  }

  return answer;
}

console.log(solution(8, 4, 7));
