function processData(input) {
  //Enter your code here
  const arr = input.split("\n").splice(1);

  const ops = [""];
  let cur = "";
  for (let i of arr) {
    let tmp = i.split(" ")[1];
    if (i[0] === "1") {
      cur += tmp;
      ops.push(cur);
    } else if (i[0] === "2") {
      cur = cur.slice(0, -tmp);
      ops.push(cur);
    } else if (i[0] === "3") {
      console.log(cur[tmp - 1]);
    } else {
      ops.pop();
      cur = ops[ops.length - 1];
    }
  }
}
