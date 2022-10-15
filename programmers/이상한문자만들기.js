function solution (s) {
    let result = []
    const arr = s.split(' ');
    for(let i = 0; i < arr.length; i++) {
        let str = ''
        for(let j = 0; j < arr[i].length; j++) {
            j % 2 === 0 ? str += arr[i][j].toUpperCase() : str += arr[i][j].toLowerCase();
        }
        result.push(str);
    }
    return result.join(' ');
}

console.log(solution("try hello world"));