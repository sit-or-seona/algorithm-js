function solution(s) {
  let answer = 0;

  for (let i in s) {
    let newS = s.slice(i) + s.slice(0, i);
    let arr = [];
    if (newS[0] === ")" || newS[0] === "]" || newS[0] === "}") continue;

    for (let j of newS) {
      if (j === "(" || j === "[" || j === "{") arr.push(j);
      if (j === ")" && arr[arr.length - 1] === "(") arr.pop();
      if (j === "]" && arr[arr.length - 1] === "[") arr.pop();
      if (j === "}" && arr[arr.length - 1] === "{") arr.pop();
    }
    if (arr.length === 0) answer++;
  }

  return answer;
}

console.log(solution("[](){}"));
