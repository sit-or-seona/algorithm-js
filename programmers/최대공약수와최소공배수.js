function solution (n, m) {
    let result = [];
    
    if(n > m) {
        [n, m] = [m, n];
    }

    for(let i = 2; i <= n; i++){
        if(n % i === 0 && m % i === 0){
            result.push(i);
        }
    }
    result.push(n * m / result[0]);
    return result;
}

console.log(solution(3,12));