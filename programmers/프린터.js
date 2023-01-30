function solution(priorities, location) {
  const arr = [];
  let index = priorities.map((v, i) => i);

  while (priorities.length > 0) {
    let shift = priorities.shift();
    if (shift >= Math.max(...priorities)) {
      arr.push(shift);
      if (index[0] === location) return arr.length;
      else index = index.slice(1);
    } else {
      priorities.push(shift);
      index = index.slice(1).concat(index.slice(0, 1));
    }
  }

  return arr.length + 1;
}

console.log(solution([2, 1, 3, 2], 2));
