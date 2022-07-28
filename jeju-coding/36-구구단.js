const num = prompt("1~9 사이의 숫자를 입력하세요.");
let answer = "";

for(let i = 1; i <= 9; i++){
    answer += num * i + " ";
}

console.log(answer);