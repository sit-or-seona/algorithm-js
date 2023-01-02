function solution(storey) {
  const str = storey + "";

  const one = str
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);

  const two =
    str[0] * 1 +
    1 +
    str
      .slice(1)
      .split("")
      .map(Number)
      .reduce((acc, cur) => (acc += 10 - cur), 0);

  return one < two ? one : two;
}
