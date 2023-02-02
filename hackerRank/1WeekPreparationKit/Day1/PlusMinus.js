function plusMinus(arr) {
  // Write your code here
  const len = arr.length;

  console.log((arr.filter((v) => v > 0).length / len).toFixed(6));
  console.log((arr.filter((v) => v < 0).length / len).toFixed(6));
  console.log((arr.filter((v) => v === 0).length / len).toFixed(6));
}
