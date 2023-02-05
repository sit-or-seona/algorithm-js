function superDigit(n, k) {
  // Write your code here
  while (n.length > 1) {
    n =
      n
        .split("")
        .map(Number)
        .reduce((acc, cur) => acc + cur, 0) + "";
  }

  return (n * k + "").length === 1
    ? n * k
    : (n * k + "")
        .split("")
        .map(Number)
        .reduce((acc, cur) => acc + cur, 0) + "";
}

console.log(superDigit("148", 3));
