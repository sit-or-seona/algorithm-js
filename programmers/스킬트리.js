function solution(skill, skill_trees) {
  let answer = 0;

  for (let i of skill_trees) {
    let tmp = "";
    for (let j of i) {
      if (skill.includes(j)) tmp += j;
    }
    if (tmp === skill.slice(0, tmp.length)) answer++;
  }
  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
