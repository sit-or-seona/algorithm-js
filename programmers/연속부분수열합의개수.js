// 시간 초과로 Fail
// function solution(elements) {
//   const nums = [];
//   for (let i = 0; i < elements.length; i++) {
//     for (let j = 0; j < elements.length; j++) {
//       for (let k = j + 1 + i; k <= j + 1 + i; k++) {
//         arr =
//           k > elements.length
//             ? elements
//                 .slice(j, k)
//                 .concat(elements.slice(0, k - elements.length))
//             : elements.slice(j, k);
//         let sum = arr.reduce((acc, cur) => acc + cur, 0);
//         if (!nums.includes(sum)) nums.push(sum);
//       }
//     }
//   }
//   return nums.length;
// }

function solution(elements) {
  const nums = new Set();
  for (let i in elements) {
    let cur = 0;
    for (let j = i; j < +i + elements.length; j++) {
      cur += j >= elements.length ? elements[j - elements.length] : elements[j];
      nums.add(cur);
    }
  }
  return nums.size;
}

console.log(solution([7, 9, 1, 1, 4]));
