function findMedian(arr) {
  // Write your code here
  const sorted = arr.sort((a, b) => a - b);

  return arr.length % 2 === 0
    ? sorted[arr.length / 2 - 1]
    : sorted[~~(arr.length / 2)];
}

console.log(findMedian([0, 1, 2, 4, 6, 5, 3]));
