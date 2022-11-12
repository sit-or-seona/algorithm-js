function solution(k, m, score) {
    let answer = 0;
    score.sort((a,b) => b-a);
    
    for(let i = m-1; i < score.length; i += m) {
        answer += score[i] * m;
    }
    
    return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));