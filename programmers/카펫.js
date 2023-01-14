function solution(brown, yellow) {
  for (let i = yellow; i >= 1; i--) {
    if (yellow % i === 0) {
      let width = i + 2;
      let height = yellow / i;
      if (width * 2 + height * 2 === brown) return [width, height + 2];
    }
  }
}

console.log(solution(24, 24));
