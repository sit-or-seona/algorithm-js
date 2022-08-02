//padStart(길이, 채울 문자열)와 padEnd(길이, 채울 문자열)를 사용 가능

const str = 'hi';

let answer = '';

answer = '='.repeat(25 - Math.floor(str.length / 2)) + str;

while(answer.length <= 50){
    answer += '=';
}

console.log(answer);