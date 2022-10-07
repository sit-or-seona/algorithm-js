function solution (d, budget) {
    let result = 0;
    let sum = 0;

    d.sort((a,b)=>a-b);

    for(let i of d) {
        if(sum + i <= budget) {
            sum += i;
            result++;
        }
    }
    
    return result;
}

console.log(solution([1,3,2,5,4],9,3));