function solution(s) {
  const arr = s.split(" ");
  return [Math.min(...arr), Math.max(...arr)].join(" ");
}

console.log(solution("1 2 3 4"));
