function solution(maps) {
  let answer = Number.MAX_SAFE_INTEGER;
  let distance = 1;
  const history = Array.from(Array(maps[0].length), () =>
    Array(maps.length).fill(0)
  );
  history[0][0] = 1;

  let di = [-1, 1, 0, 0];
  let dj = [0, 0, -1, 1];
  function dfs(i, j) {
    if (j === maps[0].length - 1 && i === maps.length - 1) {
      answer = Math.min(answer, distance);
      return;
    }

    for (let k = 0; k < 4; k++) {
      let [ri, rj] = [i + di[k], j + dj[k]];
      if (
        0 <= ri &&
        ri < maps.length &&
        0 <= rj &&
        rj < maps.length &&
        maps[ri][rj] === 1 &&
        history[ri][rj] === 0
      ) {
        history[ri][rj] = 1;
        distance++;
        dfs(ri, rj);
        history[ri][rj] = 0;
        distance--;
      }
    }
  }
  dfs(0, 0);
  return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
// console.log(
//   solution([
//     [1, 0, 1, 1, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 1],
//   ])
// );
