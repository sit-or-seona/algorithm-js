function solution(s) {
  let answer = [0, 0];

  let after = s;

  while (after !== "1") {
    let zero = after.match(/0/g)?.length || 0;
    answer[1] += zero;
    after = (after.length - zero).toString(2);
    ++answer[0];
  }

  return answer;
}

console.log(solution("01110"));
