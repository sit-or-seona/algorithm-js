function solution (n, arr1, arr2) {

    let result = [];

    for(let i = 0; i < n; i++) {
        let newArr1 = arr1[i].toString(2).padStart(n, '0');
        let newArr2 = arr2[i].toString(2).padStart(n, '0');

        let tmp = '';
        //2진수 값이 들어 있음
        for(let j = 0; j < n; j++){
            newArr1[j] === '1' || newArr2[j] === '1' ? tmp += '#' : tmp += ' ';
        }
        result.push(tmp);
    }
    return result;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));