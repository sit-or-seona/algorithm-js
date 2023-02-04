function caesarCipher(s, k) {
  // Write your code here
  let answer = "";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".repeat(k);
  const lower = upper.toLowerCase();
  for (let i of s) {
    answer += upper.includes(i)
      ? upper[upper.indexOf(i) + k]
      : lower.includes(i)
      ? lower[lower.indexOf(i) + k]
      : i;
  }
  return answer;
}
