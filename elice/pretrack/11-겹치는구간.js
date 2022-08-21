// function solution(a, b) {

//   a = a.split(',');
//   b = b.split(',');

//   a[0] = a[0] - (a[1] - a[0]);
//   b[0] = b[0] - (b[1] - b[0]);

//   console.log(a[1])

//   if((a[0] < b[0] && a[1] < b[0]) || (b[0] < a[0] && b[1] < a[0])) return 0;

//   let start = a[0] > b[0] ? a[0] : b[0];
//   let end = a[1] < b[1] ? a[1] : b[1];

// return end - start;
// }



function solution(a, b) {
  let arrA = [];
  let arrB = [];

  a = a.split(',').map(Number);
  b = b.split(',').map(Number);

  for (let i = a[0] - (a[1] - a[0]); i <= a[1]; i++) {
    arrA.push(i);
  }

  for (let i = b[0] - (b[1] - b[0]); i <= b[1]; i++) {
    arrB.push(i);
  }

  let answer = arrA.filter(i => arrB.includes(i)).length - 1;

  if (answer <= 0) return 0;

  return answer;
}

console.log(solution(('4, 10'),('2, 4')));
// -2 10
// 0 4
// 4