function solution (arr, divisor) {
    const answer = arr.sort((a,b) => a - b).filter(i => i % divisor === 0);
    return answer.length > 0 ? answer : [-1];
}

console.log(solution([2,9,7,8], 5));