function solution(a, b) {
  let arrA = [];
  let arrB = [];

  a = a.split(',').map(Number);
  b = b.split(',').map(Number);

  for (let i = a[0] - a[1]/2; i <= a[0] + a[1]/2; i++) {
    arrA.push(i);
  }

  for (let i = b[0] - b[1]/2; i <= b[0] + b[1]/2; i++) {
    arrB.push(i);
  }

  let answer = arrA.filter(i => arrB.includes(i)).length - 1;

  if (answer <= 0) return 0;

  return answer;
}

console.log(solution(('2,4'),('4,8')));