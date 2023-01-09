function solution(A, B) {
  let answer = 0;

  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);

  if (A[0] < B[0]) [A, B] = [B, A];

  for (let i in A) {
    answer += A[i] * B[B.length - i - 1];
  }

  return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4]));
