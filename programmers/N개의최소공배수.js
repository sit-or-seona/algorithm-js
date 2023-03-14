function solution(arr) {
  let r = 0;
  let m = 0;
  let n = 0;

  return arr.reduce((acc, cur) => {
    m = acc;
    n = cur;
    while (0 < n) {
      r = m % n;
      m = n;
      n = r;
    }
    return (acc * cur) / m;
  });

  // const lcm = (a, b) => {
  //   for (let i = 2; i <= b; i++) {
  //     if (a % i === 0 && b % i === 0) return i;
  //   }
  //   return a * b;
  // };

  // let cur = arr.pop();

  // while (arr.length > 0) {
  //   console.log(cur, arr);
  //   cur = lcm(cur, arr.pop());
  // }

  // return cur;
}

// console.log(solution([2, 6, 8, 14]));
// console.log(solution([1, 2, 3]));
console.log(solution([12, 32, 45, 67, 72]));
