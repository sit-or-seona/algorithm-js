const name = prompt('이름을 입력하세요.').split(" ");
const score = prompt('수학 점수를 입력하세요.').split(" ");
const obj = {};

for(let i = 0; i < name.length; i++){
    obj[name[i]] = score[i] * 1;
}

console.log(obj);