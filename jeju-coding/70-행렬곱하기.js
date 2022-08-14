const a = [[1, 2],
           [2, 4]];

const b = [[1, 0],
           [0, 3]];

// 행렬 개수가 같지 않다면 -1 return
// a: a[0][0] a[0][1] a[0][0] a[0][1] a[1][0] a[1][1] a[1][0] a[1][1] -> [0] 0 0 0 0 1 1 1 1 [1] 0 1 0 1 0 1 0 1 
// b: b[0][0] b[1][0] b[0][1] b[1][1] b[0][0] b[1][0] b[0][1] b[1][1] -> [0] 0 1 0 1 0 1 0 1 [1] 0 0 1 1 0 0 1 1

let answer = [];

if(a[0].length !== b.length) return -1;

for(let i = 0; i < a.length; i++){
    let arr = [];
    for(let j = 0; j < a[i].length; j++){
        let tmp = 0;
        for(let k = 0; k < a[i].length; k++){
            tmp += a[i][k] * b[k][j];
        }
        arr.push(tmp);
    }
    answer.push(arr);
}


console.log(answer);