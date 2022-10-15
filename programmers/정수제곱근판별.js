function solution (n) {
    let sqrt = Math.sqrt(n);
    if(sqrt === Math.floor(sqrt)) {
        return (sqrt + 1) ** 2;
    } else {
        return -1;
    }
}

console.log(solution(121));