function solution(s) {
  let check = [];

  if (s[0] !== "(") {
    return false;
  }

  for (let i of s) {
    if (i === "(") {
      check.push(i);
    } else {
      check.pop();
    }
  }

  return check.length === 0;
}

console.log(solution("(())()"));
