function solution(a, b, n) {
    let answer = 0;
    
    while (n >= a) {
        let recieve = Math.floor(n/a) * b;
        answer += recieve;
        n = recieve + n%a;
    }

    return answer;
}

console.log(solution(3, 2, 20));