function solution (x) {
    let arr = (x+'').split('').map(Number);

    return x % arr.reduce((pre,cur) => pre += cur, 0) === 0; 
}

console.log(solution(13));