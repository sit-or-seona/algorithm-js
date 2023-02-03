function lonelyinteger(a) {
  // Write your code here
  for (let i = 1; i < 100; i++) {
    if (a.filter((v) => v === i).length === 1) return i;
  }
}
