//문자열이 유사 배열 객체임을 이용
const str = prompt().split(" ");

let answer = '';

for(let i of str){
    answer += i[0];
}

console.log(answer);