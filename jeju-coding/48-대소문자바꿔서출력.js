const str = prompt('알파벳 입력');
let answer = '';

for(let i of str){
    if(i === i.toUpperCase()) answer += i.toLowerCase()
    else answer += i.toUpperCase();
}

console.log(answer);