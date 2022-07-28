const str = prompt();
let answer = "";

//solution 1
// for(let i of str){
//     if(i === "q") answer += "e";
//     else answer += i;
// }
// console.log(answer);

//solution2 정규표현식
console.log(str.replace(/q/gi, 'e'));
