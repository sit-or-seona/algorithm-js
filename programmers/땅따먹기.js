function solution(land) {
  for (let i = 1; i < land.length; i++) {
    let max = Math.max(...land[i - 1]);
    let idx = land[i - 1].indexOf(max);
    let tmp = [...land[i - 1]];
    tmp.splice(idx, 1);
    let max2 = Math.max(...tmp);

    for (let j in land[i]) {
      land[i][j] += +j !== idx ? max : max2;
    }
  }

  return Math.max(...land[land.length - 1]);
}

console.log(
  solution(
    // [
    //   [4, 3, 2, 1],
    //   [2, 2, 2, 1],
    //   [6, 6, 6, 4],
    //   [8, 7, 6, 5],
    // ],
    // 20
    [
      [1, 2, 3, 5],
      [5, 6, 7, 8],
      [4, 3, 2, 1],
    ]
  )
);
