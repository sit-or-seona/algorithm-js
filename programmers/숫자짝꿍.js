function solution(X, Y) {
    let answer = '';
    for(let i = 9; i >= 0; i--) {
        let regexp = new RegExp(i, 'g');
        let arrX = X.match(regexp);
        let arrY = Y.match(regexp);

        if(arrX && arrY) {
            arrX.length <= arrY.length ? answer += arrX.join('') : answer += arrY.join('');
        }
        
    }
    if(answer.length < 1) return "-1"
    return !!answer.replace(/0/g, '') ? answer : answer = "0";
}

console.log(solution("12321", "42531"))