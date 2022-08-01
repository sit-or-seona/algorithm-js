//나의 풀이
let answer = 0;

for(i = 1; i <= 1000; i++){
    answer += (i+'').split("").filter(a => a === '1').length;
}

console.log(answer);

//답안 - 정규표현식 사용
let s = '';
for(let i = 0; i <= 1000; i++){
  s += i;
}

console.log(s.match(/1/g).length);