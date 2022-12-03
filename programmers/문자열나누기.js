function solution(s) {
  let answer = 0;
  let same = '';
  let diff = '';
  
  for(let i in s){
      if(same.length < 1) {
          same += s[i];
      } else if (s[i] === same[0]) {
          same += s[i];
      } else {
          diff += s[i];
      }
      if(same && same.length === diff.length) {
          answer++;
          same = '';
          diff = '';
      } else if(+i === s.length-1) {
        answer++;
      }
  }
  return answer;
}

// for in 문의 인덱스는 string이다 !

console.log(solution("abracadabra"));