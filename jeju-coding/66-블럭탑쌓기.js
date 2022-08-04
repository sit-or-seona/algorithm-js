const tower = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const rule = "ABD";

let answer = [];

for(let i = 0; i < tower.length; i++){
    let tmp = '';
    for(let j = 0; j < tower[i].length; j++){
        if(tower[i][j] === 'A' || tower[i][j] === 'B' || tower[i][j] === 'D'){
            tmp += tower[i][j];
        }
    } tmp === rule ? answer.push("가능") : answer.push("불가능")
}

console.log(answer);