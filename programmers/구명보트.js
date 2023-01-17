function solution(people, limit) {
  // 시간 초과 코드 - pop()과 shift()가 시간 효율이 떨어짐
  // let answer = 0;
  // people.sort((a, b) => b - a);

  // while (people.length) {
  //   answer++;
  //   let shift = people.shift();
  //   let pop = [...people].pop();
  //   if (shift + pop <= limit) people.pop();
  // }

  // return answer;

  let answer = 0;
  people.sort((a, b) => b - a);

  for (let i in people) {
    answer++;
    if (people[i] + people[people.length - 1] <= limit) people.pop();
  }

  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
