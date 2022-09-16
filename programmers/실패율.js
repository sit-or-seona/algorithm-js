function solution (N,stages) {
    let arr = [];
    let result = [];

    for(let i = 1; i <= N; i++){
        let challenge = stages.filter(j => j >= i).length;
        let fail = stages.filter(j => j === i).length;
        arr.push([i, (fail/challenge)]);
    }

    arr.sort((a,b) => b[1] - a[1]).forEach(i => result.push(i[0]));

    return result;
}

console.log(solution(4,[4,4,4,4,4]));