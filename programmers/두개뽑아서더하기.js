function solution (numbers) {
    let result = [];

    numbers.sort((a,b)=>a-b);

    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i+1; j < numbers.length; j++){
            result.push(numbers[i] + numbers[j]);
        }
    }

    return Array.from(new Set(result));
}

console.log(solution([5,0,2,7]));