function solution (arr) {
    return arr.filter((item, i) => item !== arr[i-1])
}

console.log(solution([4,4,4,3,3]));