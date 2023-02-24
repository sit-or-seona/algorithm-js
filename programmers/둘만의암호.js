function solution(s, skip, index) {
  let result = "";
  const alphabet =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
      .split("")
      .filter((v) => !skip.includes(v));

  for (let i of s) {
    result += alphabet[alphabet.indexOf(i) + index];
  }

  return result;
}

console.log(solution("aukks", "wbqd", 5));
