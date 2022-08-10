const tower = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const rule = "ABD";

let answer = [];

for(let i of tower){
    if(i.includes('A')){
        let arrA = i.split("A");
        if(arrA[0].includes('B'||'D')) {
            answer.push('불가능');
            continue;
        }
    }
    if(i.includes('B')){
        let arrB = i.split("B");
    if(arrB[0].includes('D')){
        answer.push('불가능');
        continue;
        }
    }
    answer.push('가능');
}

console.log(answer);