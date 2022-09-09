function solution (numbers) {
    
    let sum = numbers.reduce((acc, cur) => acc += cur , 0);

    return 45 - sum;
}

console.log(solution([5,8,4,0,6,7,9]));