const limit = prompt('제한 무게');
const n = prompt('사람의 수');
let total = 0;
let answer = 0;

for(let i = 1; i <= n; i++){
    total += prompt('무게 입력') * 1;
    if(total <= limit) answer = i;
}

console.log(answer);