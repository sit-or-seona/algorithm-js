const str = prompt('문자열을 입력하세요');

let answer = '';
let count = 0;

for(let i = 0; i < str.length; i+=count){
    count = 1;
    answer += str[i];
    for(let j = i+1; j < str.length; j++){
        if(str[i] === str[j]) count++;
        else break;
    } answer += count;
}

console.log(answer);