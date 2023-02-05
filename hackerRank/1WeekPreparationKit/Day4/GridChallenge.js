function gridChallenge(grid) {
  // Write your code here
  const newGrid = grid.map((v) => v.split("").sort());

  for (let j in newGrid[0]) {
    let tmp = [];
    for (let i in newGrid) {
      tmp.push(newGrid[i][j]);
    }
    let sorted = [...tmp].sort().join("");
    if (tmp.join("") !== sorted) {
      return "NO";
    }
  }

  return "YES";
}

console.log(gridChallenge(["eabcd", "fghij", "olkmn", "trpqs", "xywuv"]));
