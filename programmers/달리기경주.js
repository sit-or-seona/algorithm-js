// 일부 case에서 런타임 에러로 Fail
function solution(players, callings) {
  callings.forEach((v) => {
    let idx = players.indexOf(v);
    let name = players.splice(idx, 1);
    players.splice(idx - 1, 0, ...name);
  });
  return players;
}
