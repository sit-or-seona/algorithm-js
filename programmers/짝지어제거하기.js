function solution(s) {
  let stack = [];
  for (let i of s) {
    if (i === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(i);
    }
  }
  if (stack.length < 1) return 1;
  else return 0;
}

console.log(solution("baabaa"));
