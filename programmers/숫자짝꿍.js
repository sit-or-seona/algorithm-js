function solution(X, Y) {
    let answer = '';

    if(X.length > Y.length) {
        [X, Y] = [Y, X];
    }

    Y = Y.split('').sort((a,b) => b-a);
    X.split('').sort((a,b) => b-a).forEach(i => {
        if(Y.includes(i)){
            answer += i;
            Y = Y.slice(Y.indexOf(i) + 1);
        }
    })
    if(answer.length < 1) return "-1"
    
    return !!answer.replace(/0/g, '') ? answer : answer = "0";
}

console.log(solution("12321", "42531"))