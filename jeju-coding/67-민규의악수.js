const n = 59;

let answer = 0;
let i = 0;

while(answer < n){
    i++;
    answer += i;
}

console.log([n-(answer-i),i+1]);