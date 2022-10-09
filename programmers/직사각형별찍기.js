function solution (n, m) {
    let result = '';

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            result += '*';
        }
        result += '\n';
    }
    return result.trim();
}

console.log(solution(5,3));