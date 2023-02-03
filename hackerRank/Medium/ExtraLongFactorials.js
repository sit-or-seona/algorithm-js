function extraLongFactorials(n) {
  // Write your code here
  let answer = 1n;
  for (let i = 1n; i <= BigInt(n); i++) {
    answer *= i;
  }
  console.log(answer.toString(10));
}

console.log(extraLongFactorials(25));
