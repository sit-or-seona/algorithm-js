function solution (n) {
    const word = '수박';

    return n % 2 === 0? word.repeat(n/2) : word.repeat(n/2) + '수';
}

console.log(solution(4));