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
    if(answer === '') return "-1"
    if(answer*1 === 0) return "0"
    
    return answer;
}

console.log(solution("12321", "42531"))