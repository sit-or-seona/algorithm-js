function solution(s) {
  let answer = [];
  const arr = s.split(" ");

  for (let i of arr) {
    let tmp = "";
    for (let j = 0; j < i.length; j++) {
      if (typeof i[j] === "string") {
        tmp += j === 0 ? i[j].toUpperCase() : i[j].toLowerCase();
      } else {
        tmp += i[j];
      }
    }
    answer.push(tmp);
  }

  return answer.join(" ");
}

console.log(solution("3people unFollowed me"));
