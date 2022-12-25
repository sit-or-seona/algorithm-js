function solution(t, p) {
  let answer = 0;
  let 자릿수 = p.length;

  for (let i = 0; i <= t.length - 자릿수; i++) {
    let tmp = t.slice(i, i + 자릿수) * 1;

    if (tmp <= p * 1) {
      answer++;
    }
  }
  return answer;
}

console.log(solution("3141592", "271"));
