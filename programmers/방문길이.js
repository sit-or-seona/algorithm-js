function solution(dirs) {
  const history = [];
  let answer = 0;
  let prev = [0, 0];
  let cur = [0, 0];

  for (let i of dirs) {
    if (i === "U" && cur[1] < 5) cur[1]++;
    else if (i === "D" && cur[1] > -5) cur[1]--;
    else if (i === "L" && cur[0] > -5) cur[0]--;
    else if (i === "R" && cur[0] < 5) cur[0]++;
    else continue;

    if (
      history.every(
        (val) =>
          JSON.stringify(val) !== JSON.stringify([prev, cur]) &&
          JSON.stringify(val) !== JSON.stringify([cur, prev])
      )
    ) {
      history.push([[...prev], [...cur]]);
      answer++;
    }
    prev = [...cur];
  }

  return answer;
}

console.log(solution("LULLLLLLU"));
