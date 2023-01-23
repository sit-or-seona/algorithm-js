function solution(s) {
  const answer = [];
  const arr = s.replaceAll("{", "").replaceAll("}}", "").split("},");

  arr.sort((a, b) => a.length - b.length);

  for (let i of arr) {
    i = i.split(",").map(Number);
    for (let j of i) {
      if (!answer.includes(j)) answer.push(j);
    }
  }

  return answer;
}

console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
