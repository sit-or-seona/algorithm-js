function processData(input) {
  //Enter your code here
  const arr = input.split("\n");
  arr.shift();

  const queue = [];
  for (let i of arr) {
    if (i[0] === "1") queue.push(i.split(" ")[1]);
    else if (i === "2") queue.shift();
    else console.log(queue[0]);
  }
}
