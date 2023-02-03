function flippingBits(n) {
  // Write your code here
  let arr = n.toString(2).padStart(32, "0").split("").map(Number);

  for (let i in arr) {
    if (arr[i] === 0) arr[i]++;
    else arr[i]--;
  }

  return parseInt(arr.join(""), 2);
}

console.log(flippingBits(1));
