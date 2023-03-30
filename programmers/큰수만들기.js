// 테스트 케이스 10, 12 Fail
function solution(number, k) {
  let answer = "";
  number = number.split("");
  let count = 0;
  for (let i = 0; i < k; i++) {
    let preIdx = 0;
    let pre = number[preIdx];
    for (let j = 1; j < number.length; j++) {
      let cur = number[j];
      if (pre < cur) {
        number.splice(preIdx, 1);
        break;
      } else {
        preIdx++;
        pre = number[preIdx];
      }
    }
  }
  answer = number.join("");
  return answer;
}
