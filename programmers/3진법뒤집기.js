function solution (n) {
    let three = n.toString(3).split('').reverse().join('');
    return parseInt(three, 3);
}

console.log(solution(45));