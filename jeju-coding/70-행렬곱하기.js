const a = [[1, 2]
           [2, 4]];

const b = [[1, 0]
           [0, 3]];

//행렬 개수가 같지 않다면 -1 return
// a: a[0][0] a[0][1] 2번 a[1][0] a[1][1] 2번
// b: b[0][0] b[1][0] -> b[0][1] b[1][1] 2번

let answer = [];

if(a.length !== b.length) return -1;

for(let i = 0; i < a.length; i++){
    for(let j = 0; j < a[i].length; j++){
        if(a[i].length !== b[i].length) return -1;
        answer.push([a[i][j] * b[j][i]]);
    }
}

console.log(answer);