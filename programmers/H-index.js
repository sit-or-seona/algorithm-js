function solution(citations) {
  const arr = [];
  citations.sort((a, b) => b - a);

  if (citations[0] === 0 || citations[0] === 1) return citations[0];

  for (let i = citations.length; i > 0; i--) {
    if (i <= citations.filter((val) => val >= i).length) arr.push(i);
  }

  return Math.max(...arr);
}

console.log(solution([1, 4]));
