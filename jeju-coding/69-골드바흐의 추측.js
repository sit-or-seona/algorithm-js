const n = 56;

let arr = [];
let answer = [];

for(let i = 2; i <= n; i++){
    arr.push(i);
}

let primeNum = arr.filter(i => {
    for(let j = 2; j < i; j++ ){
        if(i%j === 0) return false;
    }
    return true;
})

for(let i = 0; i < primeNum.length -1; i++){
    for(let j = i + 1; j < primeNum.length; j++){
        if(primeNum[i] + primeNum[j] === n) {
            answer[0] = primeNum[i];
            answer[1] = primeNum[j];
            break;
        }
    }
}

console.log(answer);