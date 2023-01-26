function solution(progresses, speeds) {
  let answer = [];

  const newArr = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));

  let queue = [];

  for (let i of newArr) {
    if (queue.length < 1 || i <= Math.max(...queue)) {
      queue.push(i);
    } else {
      answer.push(queue.length);
      queue = [i];
    }
  }

  if (queue.length > 0) answer.push(queue.length);

  return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
