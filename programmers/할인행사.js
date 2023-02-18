function solution(want, number, discount) {
  let answer = 0;
  let newNum = [...number];

  for (let i = 0; i <= discount.length - 10; i++) {
    let today = discount.slice(i, i + 10);
    for (let j of today) {
      if (newNum[want.indexOf(j)] > 0) {
        newNum[want.indexOf(j)] -= 1;
      }
    }
    if (newNum.reduce((acc, cur) => acc + cur, 0) === 0) answer++;
    newNum = [...number];
  }
  return answer;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);
