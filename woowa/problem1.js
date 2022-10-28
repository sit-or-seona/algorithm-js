function solution (pobi, crong) {

    if(pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;

    let maxPobi = 0;
    let maxCrong = 0;

    pobi.forEach(i => {
        let sum = 0;
        let multiply = 1;
        (i+'').split('').map(Number).forEach(j => {
            sum += j;
            multiply *= j;
        })
        maxPobi = sum >= multiply ? sum*1 : multiply*1;
    })

    crong.forEach(i => {
        let sum = 0;
        let multiply = 1;
        (i+'').split('').map(Number).forEach(j => {
            sum += j;
            multiply *= j;
        })
        maxCrong = sum >= multiply ? sum*1 : multiply*1;
    })

    return maxPobi > maxCrong ? 1 : maxPobi < maxCrong ? 2 : 0
}

console.log(solution([131,132], [211,212]));