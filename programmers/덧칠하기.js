// 케이스 50개 중 2개 시간 초과로 Fail
function solution(n, m, section) {
  let result = 0;
  while (section.length > 0) {
    let shift = section.shift();
    section = section.filter((v) => v >= shift + m);
    result++;
  }
  return result;
}

// 통과한 풀이
function solution(n, m, section) {
  let result = 0;
  let cur = section[0];
  while (cur <= section[section.length - 1]) {
    cur = section.find((v) => v >= cur + m);
    result++;
  }
  return result;
}
