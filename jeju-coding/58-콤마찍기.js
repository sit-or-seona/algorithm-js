//toLocaleString() 내장함수와 재귀함수를 사용할 수 있다.

const price = prompt().split("").reverse();

let answer = [];

for(let i = 0; i < price.length -1; i++){
    if(i%3 === 2) {
        answer.unshift(price[i]);
        answer.unshift(',');
    }
    else answer.unshift(price[i]);
}
answer.unshift(price[price.length -1]);

console.log(answer.join(""));