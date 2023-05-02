// 일부 case에서 런타임 에러로 Fail
function solution(players, callings) {
  callings.forEach((v) => {
    let idx = players.indexOf(v);
    let name = players.splice(idx, 1);
    players.splice(idx - 1, 0, ...name);
  });
  return players;
}

// 런타임 에러 case 축소
function solution(players, callings) {
  const obj = { ...players };

  callings.forEach((v) => {
    let idx = players.indexOf(v);
    [obj[idx - 1], obj[idx]] = [obj[idx], obj[idx - 1]];

    players[idx] = obj[idx];
    players[idx - 1] = obj[idx - 1];
  });

  return players;
}
