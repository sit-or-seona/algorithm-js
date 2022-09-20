function solution (array, commands) {
    let result = [];

    for (let i of commands) {
        let arr = array.slice(i[0]-1, i[1]).sort((a,b) => a-b);
        result.push(arr[i[2]-1]);
    }

    return result;
}

console.log(solution ([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]]));