function solution(ingredient) {
    let result = 0;
    let arr = [];
    for (let i of ingredient) {
        arr.push(i);
        if(arr.length >= 4) {
            if(
                arr[arr.length-4] === 1 && 
                arr[arr.length-3] === 2 && 
                arr[arr.length-2] === 3 && 
                arr[arr.length-1] === 1
                ) {
                result++;
                arr.splice(-4);
            }
        }
    }
    return result;
}


console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]))