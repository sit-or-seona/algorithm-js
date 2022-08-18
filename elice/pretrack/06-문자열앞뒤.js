 // 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요. 
 function solution(str) {

    let answer = '';

    for(let i = 0; i < str.length / 2; i++){
        if(str[i] === str[str.length -(1 + i)]) answer += 'Same\n';
        else answer += 'Different\n';
    }

  return answer.trim();
}

console.log(solution('abcdba'));