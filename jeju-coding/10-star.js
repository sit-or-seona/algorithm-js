//정삼각형 별 찍기
//외부 반복문 안에 2개의 내부 반복문이 있는 형태

function star (n) {
    let answer = '';
      for(let i = 1; i <= n; i++){
        let star = '';
        for(let j = 1; j <= n-i; j++){ //빈칸은 왼쪽만 있으면 됨
            star += ' ';
        }
        for(let k = 1; k <= 2*i-1; k++){
            star += '*';
        }
        answer += star + '\n';
      }
    return answer;
}

console.log(star(5));