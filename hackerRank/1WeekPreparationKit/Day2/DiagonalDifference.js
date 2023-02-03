function diagonalDifference(arr) {
  // Write your code here
  let dia1 = 0;
  let dia2 = 0;
  for (let i in arr) {
    let right = arr[i].length - 1 - i;
    for (let j in arr[i]) {
      if (i === j) dia1 += arr[i][j];
      if (j * 1 === right) dia2 += arr[i][j];
    }
  }

  return Math.abs(dia1 - dia2);
}
