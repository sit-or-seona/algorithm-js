function solution(a, b) {

    if(a >= b || a >= 15) return '오류';
    if(b >= 15) b = 15;

    let answer = [];

    for(let i = 0; i <= b - a; i++){
        let star = '';
        for(let j = 0; j < a + i; j++){
            star += '*'
        }
        answer.push(star);
    }

  return answer.join('\n');
}

console.log(solution(4, 7));