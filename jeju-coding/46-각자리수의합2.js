let line = '';

for(let i = 1; i <= 20; i++){
    line += i;
}

let answer = line.split("").map(Number).reduce((acc, cur) => acc += cur);

console.log(answer);
