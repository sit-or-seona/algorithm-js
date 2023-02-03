function countingSort(arr) {
  // Write your code here
  const newArr = new Array(100).fill(0);

  arr.forEach((v, i) => (newArr[v] += 1));

  return newArr;
}
