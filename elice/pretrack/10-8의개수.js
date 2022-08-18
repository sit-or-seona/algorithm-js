function solution() {

    let answer = 0;

    for(let i = 1; i <= 20; i++){
        let arr = (i+'').split('');
        console.log(arr);
        answer += arr.filter(i => i === '8').length;
    }

  return answer;
}

console.log(solution());