function solution(input) {
    let answer = input.split();
    answer.unshift('빵');
    answer.push('빵');
  return answer.join(' '); //join(' ')로 입력시 공백을 추가하여 배열을 문자열로 합친다.
}

console.log(solution('햄과치즈'));