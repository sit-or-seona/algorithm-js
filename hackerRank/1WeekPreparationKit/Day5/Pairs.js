function pairs(k, arr) {
  // Write your code here
  let answer = 0;
  arr.sort((a, b) => a - b);

  for (let i of arr) {
    if (arr.includes(i + k)) answer++;
  }
  return answer;
}
