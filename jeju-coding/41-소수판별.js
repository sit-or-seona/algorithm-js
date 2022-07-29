const num = prompt('숫자 입력');
let answer = '';

for(let i = 2; i <= Math.sqrt(num); i++){
    if (num % i === 0) {
        answer = 'NO';
        break;
    }
}

if(answer === '') answer = 'YES';

console.log(answer);