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

// 객체를 활용하여 시간 복잡도 축소 -> Success
function solution(players, callings) {
  let obj = {};
  players.forEach((v, i) => (obj[v] = i));
  callings.forEach((v) => {
    [players[obj[v] - 1], players[obj[v]]] = [
      players[obj[v]],
      players[obj[v] - 1],
    ];
    obj[players[obj[v]]]++;
    obj[v]--;
  });

  return players;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);
// ["mumu", "kai", "mine", "soe", "poe"]
