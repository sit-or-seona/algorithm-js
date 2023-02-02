function miniMaxSum(arr) {
  // Write your code here
  const sorted = arr.sort((a, b) => a - b);

  const min = sorted.slice(0, 4).reduce((acc, cur) => acc + cur, 0);
  const max = sorted.slice(1).reduce((acc, cur) => acc + cur, 0);

  console.log(min, max);
}
