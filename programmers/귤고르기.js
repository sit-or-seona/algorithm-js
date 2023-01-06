function solution(k, tangerine) {
  let obj = {};

  for (let i of tangerine) {
    if (obj[i]) {
      obj[i] += 1;
    } else {
      obj[i] = 1;
    }
  }

  const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  let sum = 0;
  let answer = 0;

  for (let i of sorted) {
    if (sum < k) {
      sum += i[1];
      answer++;
    }
  }

  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
