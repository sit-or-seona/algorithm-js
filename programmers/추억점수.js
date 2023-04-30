function solution(name, yearning, photo) {
  const result = [];

  for (let i of photo) {
    let count = 0;
    for (let j of i) {
      if (name.includes(j)) {
        count += yearning[name.indexOf(j)];
      }
    }
    result.push(count);
  }
  return result;
}
