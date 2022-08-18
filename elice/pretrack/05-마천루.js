 // 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요. 
 function solution(input) {
    let answer = '';
    
    for(let i = 1; i <= input; i++){
        let star = '';
        for(let j = 1; j <= i; j++){
            if(j > 5) break;
            answer += '*';
        }
        answer += '\n';
    }
  // 출력할 결과를 문자열로 return 하세요.
  return answer.trim();
}

console.log(solution(7));