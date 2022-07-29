const num = prompt('양의 정수').split("").map(Number);

let answer = num.reduce((acc, cur) => acc += cur, 0);

console.log(answer);